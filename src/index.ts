import express from 'express';
import { actorsRouter } from './router/actors';
import { moviesRouter } from './router/movies';
import { authRouter } from './router/auth';
import { DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/database.sqlite'
});

export const Movie = sequelize.define('movie', {
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  director: DataTypes.STRING,
  releaseDate: DataTypes.DATE
}, { timestamps: false});

export const Actor = sequelize.define('actor', {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING
}, { timestamps: false});

Actor.belongsToMany(Movie, { through: 'MovieActor' });

sequelize.sync();
//sequelize.sync({force: true});

const app = express();
app.use(express.json());

const apiRouter = express.Router();
apiRouter.use('/auth', authRouter);
apiRouter.use('/movies', moviesRouter );
apiRouter.use('/actors', actorsRouter);

app.use("/api", apiRouter);

/**
app.get('/api/', (req, res) => {
  res.send('Hello world!');
});


app.get('/api/:tata', (req, res) => {
  console.log(req.body);
  res.send('Hello ');
});
*/




app.listen(1337, () => {
  console.log('Server is listening on port 1337');
});