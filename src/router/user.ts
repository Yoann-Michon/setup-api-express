import { Router } from "express";
import { middleware } from "./middleware";
import { User } from "..";
import jwt from 'jsonwebtoken'
import { IJwtInfo } from "./auth";

export const userRouter = Router();

userRouter.get("/me",middleware,async (req,res) => {
    
    const user = await User.findOne({where: { id: req.userId }})
    if(user){
        res.json({
            user
        })
    }
})