import { AppDataSource } from "../data-source"
import { User } from "../entities/user.entity"
import { IUserID } from "../interfaces/users.interfaces"

const userListOneService = async ({ id }: IUserID) => {
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOneBy({ id })

  if (!user) {
    throw new Error("User not found!")
  }

  return user
}

export default userListOneService
