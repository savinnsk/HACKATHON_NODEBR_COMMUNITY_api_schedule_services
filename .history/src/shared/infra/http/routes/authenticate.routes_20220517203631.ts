import { Router } from "express";

import { AuthenticateUserController } from "@modules/users/useCases/AuthticateUser/AuthenticateUserController";

const authenticateRoutes = Router();
const authenticateUserController = AuthenticateUserController();

authenticateRoutes.post("/sessions");

export { authenticateRoutes };
