import { Request, Response } from "express"
import userUpdateService from "../services/userUpdate.service"

const userUpdateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { name, email, password, age } = req.body

    const updatedUser = await userUpdateService({
      name,
      email,
      password,
      age,
      id,
    })

    const { password: newPassword, ...user } = updatedUser
    return res.status(200).json({ message: "User updated with succes!" })
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).send({
        error: error.name,
        message: error.message,
      })
    }
  }
}

export default userUpdateController
