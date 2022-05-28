import { Router } from "express";

import { CreateSchedulingController } from "@modules/schedulings/useCases/CreateScheduling/CreateSchedulingController";
import { EditSchedulingController } from "@modules/schedulings/useCases/EditScheduling/EditSchedulingController";
import { ListSchedulingsController } from "@modules/schedulings/useCases/ListSchedulings/ListSchedulingsController";
import { SearchSchedulingController } from "@modules/schedulings/useCases/SearchScheduling/SearchSchedulingController";

import { ensureServiceProviderAuthenticated } from "../middlewares/ensureServiceProviderAuthenticated";

const schedulingsRoutes = Router();

const createSchedulingController = new CreateSchedulingController();
const listSchedulingsController = new ListSchedulingsController();
const searchSchedulingController = new SearchSchedulingController();
const editSchedulingController = new EditSchedulingController();

schedulingsRoutes.post(
  "/create",
  ensureServiceProviderAuthenticated,
  createSchedulingController.handle
);

schedulingsRoutes.put(
  "/edit/:id",
  ensureServiceProviderAuthenticated,
  editSchedulingController.handle
);

schedulingsRoutes.put("/available/:id");

schedulingsRoutes.get("/", listSchedulingsController.handle);

schedulingsRoutes.get("/search", searchSchedulingController.handle);

export { schedulingsRoutes };
