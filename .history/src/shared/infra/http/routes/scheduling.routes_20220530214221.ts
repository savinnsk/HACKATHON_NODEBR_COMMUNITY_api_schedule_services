import { Router } from "express";

import { CreateSchedulingController } from "@modules/schedulings/useCases/CreateScheduling/CreateSchedulingController";
import { DeleteSchedulingController } from "@modules/schedulings/useCases/DeleteScheduling/DeleteSchedulingController";
import { DisableSchedulingController } from "@modules/schedulings/useCases/DisablingScheduling/DisableSchedulingController";
import { EditSchedulingController } from "@modules/schedulings/useCases/EditScheduling/EditSchedulingController";
import { ListSchedulingsController } from "@modules/schedulings/useCases/ListSchedulings/ListSchedulingsController";
import { SearchSchedulingController } from "@modules/schedulings/useCases/SearchScheduling/SearchSchedulingController";

import { ensureServiceProviderAuthenticated } from "../middlewares/ensureServiceProviderAuthenticated";

const schedulingsRoutes = Router();

const createSchedulingController = new CreateSchedulingController();
const listSchedulingsController = new ListSchedulingsController();
const searchSchedulingController = new SearchSchedulingController();
const editSchedulingController = new EditSchedulingController();
const disableSchedulingController = new DisableSchedulingController();
const deleteSchedulingController = new DeleteSchedulingController();

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

schedulingsRoutes.put(
  "/disable/:id",
  ensureServiceProviderAuthenticated,
  disableSchedulingController.handle
);

schedulingsRoutes.delete(
  "/delete/:id",
  ensureServiceProviderAuthenticated,
  deleteSchedulingController.handle
);

schedulingsRoutes.get("/", listSchedulingsController.handle);

schedulingsRoutes.get("/search", searchSchedulingController.handle);

export { schedulingsRoutes };
