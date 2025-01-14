import { Request, Response } from 'express'

const allUserController = async (req: Request, res: Response) => {
  const userData: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
  res.json({
    users: userData,
  })
}

export { allUserController }
