import { Request, Response } from "express"
import createUserService from "../services/userCreate.service"

const userCreateController = async (req: Request, res: Response) => {
  try {
    const newUser = await createUserService(req.body)
    const { password, ...user } = newUser

    return res.status(201).send(user)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send({
        error: error.name,
        message: error.message,
      })
    }
  }
}

export default userCreateController
