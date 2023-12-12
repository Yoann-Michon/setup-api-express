import { Router } from "express";
import { User } from "..";
import bcrypt from 'bcrypt';

const saltRounds = 10;



export const authRouter = Router();

////////////////////////////
//         POST          //
//////////////////////////

authRouter.post("/local", (req, res) => {
    console.log('toto', req.body);
});

authRouter.post("/local/register",async (req,res) => {

  const hash = await bcrypt.hash(req.body.password, saltRounds);
  const log = await User.findOne({where: {login: req.body.login}})

  if (log){
    res.status(400).send('utilisateur existant')
  }else {
    const newlog = await User.create({login: req.body.login, password: hash});
    //permet de ne pas afficher le password
    delete newlog.dataValues.password;
    res.json({
      newlog
    });
  }
});
///////////////////////////
//         PUT          //
/////////////////////////

///////////////////////////
//         DELETE       //
/////////////////////////