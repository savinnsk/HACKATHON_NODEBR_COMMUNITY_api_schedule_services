import { Router } from "express";

import { CreateSchedulingController } from "@modules/schedulings/useCases/CreateScheduling/CreateSchedulingController";

import { ensureServiceProviderAuthenticated } from "../middlewares/ensureServiceProviderAuthenticated";
import { ensureUserAuthenticated } from "../middlewares/ensureUserAuthenticated";

const schedulingsRoutes = Router();

const createSchedulingController = new CreateSchedulingController();

schedulingsRoutes.post(
  "/create",
  ensureServiceProviderAuthenticated,
  createSchedulingController.handle
);

export { schedulingsRoutes };
