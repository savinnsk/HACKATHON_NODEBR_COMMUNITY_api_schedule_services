import { Router } from "express";

import { schedulingsRoutes } from "./scheduling.routes";
import { usersRoutes } from "./users.routes";
import { serviceProvidersRoutes } from "./service_providers.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/service_providers", serviceProvidersRoutes);
router.use("/schedule", schedulingsRoutes);

export { router };
