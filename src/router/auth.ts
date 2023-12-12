import { Router } from "express";

export const authRouter = Router();

////////////////////////////
//         POST          //
//////////////////////////

authRouter.post("/local", (req, res) => {
    console.log('toto', req.body);
  });

///////////////////////////
//         GET          //
/////////////////////////

authRouter.get("/local", (req, res) => {
    console.log('toto', req.body);
});

///////////////////////////
//         PUT          //
/////////////////////////

///////////////////////////
//         DELETE       //
/////////////////////////