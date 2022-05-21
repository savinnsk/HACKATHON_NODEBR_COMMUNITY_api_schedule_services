import { Router } from "express";

import { schedulingsRoutes } from "./scheduling.routes";
import { serviceProvidersRoutes } from "./service_providers.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/service_providers", serviceProvidersRoutes);
router.use("/scheduling", schedulingsRoutes);

export { router };
