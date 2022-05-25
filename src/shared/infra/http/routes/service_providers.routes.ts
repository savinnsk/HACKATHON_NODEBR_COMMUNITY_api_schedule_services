import { Router } from "express";

import { AuthenticateServiceProviderController } from "@modules/service_providers/useCases/AuthenticateServiceProvider/AuthenticateServiceProviderController";
import { CreateServiceProviderController } from "@modules/service_providers/useCases/CreateServiceProvider/CreateServiceProviderController";
import { ListAllServicesOfProviderController } from "@modules/service_providers/useCases/ListAllServicesOfProvider/ListAllServicesOfProviderController";

import { ensureServiceProviderAuthenticated } from "../middlewares/ensureServiceProviderAuthenticated";

const createServiceProviderController = new CreateServiceProviderController();
const authenticateServiceProviderController =
  new AuthenticateServiceProviderController();

const listAllServicesOfProviderController =
  new ListAllServicesOfProviderController();

const serviceProvidersRoutes = Router();

serviceProvidersRoutes.post(
  "/register",
  createServiceProviderController.handle
);

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
