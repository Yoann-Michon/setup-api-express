import { Router } from "express";
import { User } from "..";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { middleware } from "./middleware";
import 'dotenv/config'

const saltRounds = 10;



export const authRouter = Router();

////////////////////////////
//         POST          //
//////////////////////////

export interface IJwtInfo {
  userId: number
}

authRouter.post("/local",async (req, res) => {
  const log = await User.findOne({where: {login: req.body.login}});
  
  if (log){
    const match = await bcrypt.compare(req.body.password, log.dataValues.password)
    if(match){
      const dataToSign: IJwtInfo = { userId: log.dataValues.id }
      const token = jwt.sign(dataToSign, process.env.JWT_SECRET!, { expiresIn: '1h' });
      res.json({
        token
      });
    }
    else {
      res.status(400).json({ error: "mauvais mot de passe"});
    }
  }else{
    res.status(400).json({ error: "utilisateur n'existe pas"});
  }
  
});

authRouter.post("/local/register",async (req,res) => {

  const hash = await bcrypt.hash(req.body.password, saltRounds);
  const log = await User.findOne({where: {login: req.body.login}});
  const newlog = await User.create({login: req.body.login, password: hash});

  if (log){
    res.status(400).send('utilisateur existant')
  }else {
    
    //permet de ne pas afficher le password
    delete newlog.dataValues.password;
    res.json({
      newlog
    });
  }
});

authRouter.post("/change-password",middleware, async (req,res)=>{
  const login = await User.findOne({where: {login:req.body.login}})
  console.log(login);
  
  if (login){
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    
    await login.update({password: hashedPassword});

    delete login.dataValues.password;
    res.json({ message: 'Password changed successfully',login});
  }else{
    res.status(400)
  }
  
})

///////////////////////////
//         DELETE       //
/////////////////////////