import { Router } from "express";

import { CreateSchedulingController } from "@modules/schedulings/useCases/CreateScheduling/CreateSchedulingController";
import { ListSchedulingsController } from "@modules/schedulings/useCases/ListSchedulings/ListSchedulingsController";

import { ensureServiceProviderAuthenticated } from "../middlewares/ensureServiceProviderAuthenticated";

const schedulingsRoutes = Router();

const createSchedulingController = new CreateSchedulingController();
const listSchedulingsController = new ListSchedulingsController();

schedulingsRoutes.post(
  "/create",
  ensureServiceProviderAuthenticated,
  createSchedulingController.handle
);

schedulingsRoutes.get("/", listSchedulingsController.handle);

export { schedulingsRoutes };
