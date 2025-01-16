import express from 'express'
import { loginControllers, signupControllers } from '../controllers/index.js'
const router = express.Router()
router.post('/registar', signupControllers) 
router.post('/login', loginControllers)

export default router
