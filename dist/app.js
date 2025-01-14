import express from 'express';
import userRouter from './routes/index.js';
const app = express();
app.use(express.json());
app.use('/user', userRouter);
app.get('/', (req, res) => {
    res.send('Hello');
});
app.listen(3000, () => console.log('port:http://localhost:3000'));
