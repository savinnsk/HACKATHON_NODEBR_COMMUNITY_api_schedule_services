import { Router } from "express";

import { AuthenticateUserController } from "@modules/users/useCases/AuthenticateUser/AuthenticateUserController";
import { CreateUserController } from "@modules/users/useCases/CreateUser/CreateUserController";

import { ensureUserAuthenticated } from "../middlewares/ensureUserAuthenticated";

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

const usersRoutes = Router();

usersRoutes.post("/register", createUserController.handle);

usersRoutes.post("/session", authenticateUserController.handle);

usersRoutes.put("/edit", ensureUserAuthenticated);

export { usersRoutes };
