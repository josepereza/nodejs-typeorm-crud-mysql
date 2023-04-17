import { Router } from "express"
import userCreateController from "../controllers/userCreate.controller"
import userDeleteController from "../controllers/userDelete.controller"
import userListController from "../controllers/userList.controller"
import userListOneController from "../controllers/userListOne.controller"
import userUpdateController from "../controllers/userUpdate.controller"

const userRoutes = Router()

userRoutes.post("", userCreateController)

userRoutes.get("", userListController)
userRoutes.get("/:id", userListOneController)

userRoutes.patch("/:id", userUpdateController)

userRoutes.delete("/:id", userDeleteController)

export default userRoutes
