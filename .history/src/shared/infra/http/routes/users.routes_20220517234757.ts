import { Router } from "express";

import { CreateUserController } from "@modules/users/useCases/CreateUser/CreateUserController";

const createUserController = new CreateUserController();

const usersRoutes = Router();

usersRoutes.post("/register", createUserController.handle);

export { usersRoutes };
