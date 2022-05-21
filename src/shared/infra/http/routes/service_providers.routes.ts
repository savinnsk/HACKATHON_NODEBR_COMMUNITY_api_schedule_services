import { Router } from "express";

import { AuthenticateServiceProviderController } from "@modules/service_providers/useCases/AuthenticateServiceProvider/AuthenticateServiceProviderController";
import { CreateServiceProviderController } from "@modules/service_providers/useCases/CreateServiceProvider/CreateServiceProviderController";

const createServiceProviderController = new CreateServiceProviderController();
const authenticateServiceProviderController =
  new AuthenticateServiceProviderController();

const serviceProvidersRoutes = Router();

serviceProvidersRoutes.post(
  "/register",
  createServiceProviderController.handle
);
serviceProvidersRoutes.post(
  "/session",
  authenticateServiceProviderController.handle
);

export { serviceProvidersRoutes };
