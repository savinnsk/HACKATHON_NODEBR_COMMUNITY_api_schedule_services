import { Router } from "express";

import { AuthenticateUserController } from "@modules/users/useCases/AuthenticateUser/AuthenticateUserController";
import { CreateUserController } from "@modules/users/useCases/CreateUser/CreateUserController";
import { EditUserController } from "@modules/users/useCases/EditUser/EditUserController";
import { EnableServiceProviderController } from "@modules/users/useCases/EnableServiceProvider/EnableServiceProviderController";
import { MarkAppoimentController } from "@modules/users/useCases/MarkAppoiment/MarkAppoimentController";

import { ensureUserAuthenticated } from "../middlewares/ensureUserAuthenticated";

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const editUserController = new EditUserController();
const enableServiceProviderController = new EnableServiceProviderController();
const markAppoimentController = new MarkAppoimentController();

const usersRoutes = Router();

usersRoutes.post("/register", createUserController.handle);

usersRoutes.post("/session", authenticateUserController.handle);

usersRoutes.put(
  "/appoiment",
  ensureUserAuthenticated,
  markAppoimentController.handle
);

usersRoutes.put("/", ensureUserAuthenticated, editUserController.handle);

usersRoutes.patch(
  "/enable_service_provider",
  ensureUserAuthenticated,
  enableServiceProviderController.handle
);

export { usersRoutes };
