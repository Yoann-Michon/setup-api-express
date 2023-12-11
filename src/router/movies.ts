import { Router } from "express";

export const moviesRouter = Router();
////////////////////////////
//         POST          //
//////////////////////////
moviesRouter.post("/", (req, res) => {
    console.log('liste des films', req.body);
  });

///////////////////////////
//         GET          //
/////////////////////////

moviesRouter.get("/", (req, res) => {
    console.log('liste des films', req.body);
});

moviesRouter.get("/?populate", (req, res) => {
    const populateActors = req.query.populate === 'actors';
    console.log('liste des films', populateActors);
});

moviesRouter.get("/", (req, res) => {
    console.log('liste des films', req.body);
});

///////////////////////////
//         PUT          //
/////////////////////////

moviesRouter.put("/", (req, res) => {
    console.log('liste des films', req.body);
});

moviesRouter.put("/2", (req, res) => {
    console.log('liste des films', req.body);
});