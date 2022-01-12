import express from 'express';
import tourRouter from './routes/tourRoutes.js';
import userRouter from './routes/userRoutes.js';

import morgan from 'morgan';
const app = express();

//*Middlewares
app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//*Routes

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

//*Server
const port = 3000;
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
