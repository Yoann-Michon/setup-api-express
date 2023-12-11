import express from 'express';
import { actorsRouter } from './router/actors';
import { moviesRouter } from './router/movies';
import { authRouter } from './router/auth';

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