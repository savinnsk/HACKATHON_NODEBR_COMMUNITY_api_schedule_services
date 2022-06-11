import { Router } from "express";

import { AuthenticateServiceProviderController } from "@modules/users/useCases/AuthenticateServiceProvider/AuthenticateServiceProviderController";

const authenticateServiceProviderController =
  new AuthenticateServiceProviderController();

const serviceProvidersRoutes = Router();

serviceProvidersRoutes.post(
  "/session",
  authenticateServiceProviderController.handle
);

export { serviceProvidersRoutes };
