import { User } from "../entities/user.entity"
import { ICreateUser } from "../interfaces/users.interfaces"
import { AppDataSource } from "../data-source"
import bcrypt from "bcryptjs"

const createUserService = async ({
  name,
  email,
  password,
  age,
}: ICreateUser) => {
  const userRepository = AppDataSource.getRepository(User)
  const users = await userRepository.find()

  const emailAlreadyExists = users.find((user) => user.email === email)

  if (emailAlreadyExists) {
    throw new Error("Email already exists")
  }

  const user = new User()
  user.name = name
  user.email = email
  user.password = bcrypt.hashSync(password, 10)
  user.age = age
  user.created_at = new Date()
  user.updated_at = new Date()

  userRepository.create(user)
  await userRepository.save(user)

  return user
}

export default createUserService
