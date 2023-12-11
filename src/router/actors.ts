import { Router } from "express";
import { Actor } from "..";

export const actorsRouter = Router();

////////////////////////////
//         POST          //
//////////////////////////

actorsRouter.post("/", async (req, res) => {
    const newActor = await Actor.create({firstName: 'titi', lastName: 'toto'})
    console.log('liste des acteurs', req.body);
    res.json({
        result: newActor
    })
});

///////////////////////////
//         GET          //
/////////////////////////

actorsRouter.get("/", async (req, res) => {
    const allActors = await Actor.findAll()
    console.log('liste des acteurs', allActors);
    res.json({
        allActors
    })
});

actorsRouter.put("/", (req, res) => {
    console.log('liste des acteurs', req.body);
});

actorsRouter.put("/3", (req, res) => {
    console.log('liste des acteurs', req.body);
});