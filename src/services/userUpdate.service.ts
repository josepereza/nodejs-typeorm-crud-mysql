import { AppDataSource } from "../data-source"
import { User } from "../entities/user.entity"
import { IUserUpdate } from "../interfaces/users.interfaces"
import bcrypt from "bcryptjs"

const userUpdateService = async ({
  name,
  email,
  age,
  password,
  id,
}: IUserUpdate) => {
  const userRepository = AppDataSource.getRepository(User)
  const user = await userRepository.findOneBy({ id })

  if (!user) {
    throw new Error("User not found!")
  }

  if (password) {
    user.password = bcrypt.hashSync(password, 10)
  }

  user.name = name || user.name
  user.email = email || user.email
  user.age = age || user.age
  user.updated_at = new Date()

  await userRepository.save(user)

  return user
}

export default userUpdateService
