import { Router } from "express";

import { CreateSchedulingController } from "@modules/schedulings/useCases/CreateScheduling/CreateSchedulingController";
import { ListSchedulingsController } from "@modules/schedulings/useCases/ListSchedulings/ListSchedulingsController";
import { SearchSchedulingController } from "@modules/schedulings/useCases/SearchScheduling/SearchSchedulingController";

import { ensureServiceProviderAuthenticated } from "../middlewares/ensureServiceProviderAuthenticated";

const schedulingsRoutes = Router();

const createSchedulingController = new CreateSchedulingController();
const listSchedulingsController = new ListSchedulingsController();
const searchSchedulingController = new SearchSchedulingController();

schedulingsRoutes.post(
  "/create",
  ensureServiceProviderAuthenticated,
  createSchedulingController.handle
);

schedulingsRoutes.get("/", listSchedulingsController.handle);

schedulingsRoutes.get("/search", searchSchedulingController.handle);

export { schedulingsRoutes };
