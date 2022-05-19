import { Router } from "express";

import { CreateServiceProviderController } from "@modules/service_providers/useCases/CreateServiceProvider/CreateServiceProviderController";
import { AuthenticateUserController } from "@modules/users/useCases/AuthenticateUser/AuthenticateUserController";

const createUserController = new CreateServiceProviderController();
const authenticateUserController = new AuthenticateUserController();

const serviceProvidersRoutes = Router();

serviceProvidersRoutes.post("/register", createUserController.handle);
serviceProvidersRoutes.post("/session", authenticateUserController.handle);

export { serviceProvidersRoutes };
