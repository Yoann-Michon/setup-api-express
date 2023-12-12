import { Router } from "express";
import { Actor } from "..";

export const actorsRouter = Router();

////////////////////////////
//         POST          //
//////////////////////////

actorsRouter.post("/", async (req, res) => {
    const newActor = await Actor.create({firstName: 'titi', lastName: 'toto'})
    console.log('liste des acteurs', newActor);
    res.json({
        newActor
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

///////////////////////////
//         PUT          //
/////////////////////////

actorsRouter.get("/:id", async (req, res) => {
    const actorToUpdate = await Actor.findOne({where: { id: req.params.id }})
    console.log('liste des acteurs', actorToUpdate);
});

actorsRouter.put("/:id", async (req, res) => {
    const actorToUpdate = await Actor.findOne({where: { id: req.params.id }})
    if(actorToUpdate){
        const upActor = await actorToUpdate.update(req.body.data);
        res.json(upActor)
    }
    else {
        res.status(400).json({ error: "actor to update doesn't exist"})
    }

    console.log('liste des acteurs', req.body);
});

///////////////////////////
//         DELETE       //
/////////////////////////

actorsRouter.delete("/:id", async (req, res) => {
    const actorToDestroy = await Actor.findOne({where: { id:req.params.id }});
    if(actorToDestroy){
        const destroyActor = await actorToDestroy.destroy();
        res.json(destroyActor)
    }
    else {
        res.status(400).json({ error: "actor to destroy doesn't exist"})
    }

    console.log('liste des acteurs', req.body);
});


