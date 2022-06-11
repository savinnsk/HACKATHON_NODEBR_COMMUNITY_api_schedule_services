import { Router } from "express";

import { ListAllServicesOfProviderController } from "@modules/service_providers/useCases/ListAllServicesOfProvider/ListAllServicesOfProviderController";
import { AuthenticateServiceProviderController } from "@modules/users/useCases/AuthenticateServiceProvider/AuthenticateServiceProviderController";

import { ensureServiceProviderAuthenticated } from "../middlewares/ensureServiceProviderAuthenticated";

const authenticateServiceProviderController =
  new AuthenticateServiceProviderController();

const listAllServicesOfProviderController =
  new ListAllServicesOfProviderController();

const serviceProvidersRoutes = Router();

serviceProvidersRoutes.post(
  "/session",
  authenticateServiceProviderController.handle
);

serviceProvidersRoutes.get(
  "/services",
  ensureServiceProviderAuthenticated,
  listAllServicesOfProviderController.handle
);

export { serviceProvidersRoutes };
