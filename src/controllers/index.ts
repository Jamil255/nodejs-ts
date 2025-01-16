import { Request, Response } from 'express'
import User from '../models/index.js'
import bcrypt, { hash } from 'bcrypt'

const signupControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, email, password } = req.body

    if (!email || !name || !password) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    const userInfo = await User.findOne({ email })

    if (userInfo !== null) {
      return res.status(400).json({ message: 'Email is already in use' })
    }

    const hashPass = await bcrypt.hash(password, 10)

    const user = await User.create({
      ...req.body,
      password: hashPass,
    })

    return res.json({
      message: 'User created successfully',
      status: 'success',
      user,
    })
  } catch (error: unknown) {
    // Narrow the error type to Error
    if (error instanceof Error) {
      return res.status(500).json({
        message: 'Server error',
        error: error.message, // You can safely access 'message' here
        stack: error.stack, // You can optionally include 'stack'
      })
    }

    // If the error is not an instance of Error, provide a generic message
    return res.status(500).json({
      message: 'An unknown error occurred',
    })
  }
}

const loginControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({
      message: 'all fields are required',
    })
  }

  const user = await User.findOne({ email })
  if (!user) {
    return res.status(400).json({
      message: 'Invalid email or password',
    })
  }
  const hashPass = bcrypt.compare(password, user.password)
  if (!hashPass) {
    return res.status(400).json({
      message: 'Invalid email or password',
    })
  }
  return res.status(200).json({
    message: 'user successfully login',
    user,
  })
}

export { signupControllers, loginControllers }
