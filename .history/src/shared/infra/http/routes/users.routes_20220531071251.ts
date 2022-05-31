import { Router } from "express";

import { AuthenticateUserController } from "@modules/users/useCases/AuthenticateUser/AuthenticateUserController";
import { CreateUserController } from "@modules/users/useCases/CreateUser/CreateUserController";
import { EditUserController } from "@modules/users/useCases/EditUser/EditUserController";

import { ensureUserAuthenticated } from "../middlewares/ensureUserAuthenticated";

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const editUserController = new EditUserController();

const usersRoutes = Router();

usersRoutes.post("/register", createUserController.handle);

usersRoutes.post("/session", authenticateUserController.handle);

usersRoutes.put("/edit", ensureUserAuthenticated);

export { usersRoutes };
