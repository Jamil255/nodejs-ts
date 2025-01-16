import { Request, Response } from 'express'

const signupControllers = async (req: Request, res: Response) => {
  const { name, email, password } = req.body
  if (!email || !name || !password)
    return res.status(400).json({ message: 'all fields is required' })
  res.json({
    message: 'success',
  })
}

export { signupControllers }
