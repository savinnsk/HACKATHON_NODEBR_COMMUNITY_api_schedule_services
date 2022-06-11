import { Router } from "express";

import { ListAllServiceProviderServicesController } from "@modules/schedulings/useCases/ListAllServiceProviderServices/ListAllServiceProviderServicesController";
import { AuthenticateServiceProviderController } from "@modules/users/useCases/AuthenticateServiceProvider/AuthenticateServiceProviderController";

import { ensureServiceProviderAuthenticated } from "../middlewares/ensureServiceProviderAuthenticated";

const authenticateServiceProviderController =
  new AuthenticateServiceProviderController();

const listAllServiceProviderServicesController =
  new ListAllServiceProviderServicesController();

const serviceProvidersRoutes = Router();

serviceProvidersRoutes.post(
  "/session",
  authenticateServiceProviderController.handle
);

serviceProvidersRoutes.get(
  "/services",
  ensureServiceProviderAuthenticated,
  listAllServiceProviderServicesController.handle
);

export { serviceProvidersRoutes };
