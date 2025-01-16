import express, { Request, Response } from 'express'
import userRouter from './routes/index.js'
import connectDb from './config/db.js'
const app = express()
app.use(express.json())
app.use('/user', userRouter)
connectDb()
app.get('/', (req: Request, res: Response) => {
  res.send('Hello')
})

app.listen(3000, () => console.log('port:http://localhost:3000'))
