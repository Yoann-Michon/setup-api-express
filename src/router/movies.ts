import { Router } from "express";
import { Movie } from "..";
import { Where } from "sequelize/types/utils";

export const moviesRouter = Router();
////////////////////////////
//         POST          //
//////////////////////////

/**
 * moviesRouter.post("/", (req, res) => {
    console.log('liste des films', req.body);
  });
 */


  moviesRouter.post("/", async (req, res) => {
    const film = await Movie.create({name: 'lol', description: 'toto', director:'Jam Bon'});
    console.log('liste des acteurs', film);
    res.json(film)});

///////////////////////////
//         GET          //
/////////////////////////

moviesRouter.get("/", (req, res) => {
    console.log('liste des films', req.body);
});

moviesRouter.get("/:id", async (req, res) => {
    const movie=await Movie.findOne({where: { id: req.params.id }});
    res.json(movie)
});

/**
 * moviesRouter.get("/", (req, res) => {
    console.log('liste des films', req.body);
});
 */


moviesRouter.post("/", async (req, res) => {
    const newMovie = await Movie.create({...req.body.data })
    console.log('film', Movie);
    res.json({
        newMovie
    })
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

moviesRouter.put("/:id", async (req, res) => {
    const movieToUpdate = await Movie.findOne({where: { id: req.params.id }})
    if(movieToUpdate){
        const upMovie = await movieToUpdate.update(req.body.data);
        res.json(upMovie)
    }
    else {
        res.status(400).json({ error: "movie to update doesn't exist"})
    }

    console.log('liste des films', req.body);
});