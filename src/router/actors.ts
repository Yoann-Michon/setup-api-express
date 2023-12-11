import { Router } from "express";

export const actorsRouter = Router();

////////////////////////////
//         POST          //
//////////////////////////

actorsRouter.post("/", (req, res) => {
    console.log('liste des acteurs', req.body);
});

///////////////////////////
//         GET          //
/////////////////////////

actorsRouter.get("/", (req, res) => {
    console.log('liste des acteurs', req.body);
});

actorsRouter.put("/", (req, res) => {
    console.log('liste des acteurs', req.body);
});

actorsRouter.put("/3", (req, res) => {
    console.log('liste des acteurs', req.body);
});