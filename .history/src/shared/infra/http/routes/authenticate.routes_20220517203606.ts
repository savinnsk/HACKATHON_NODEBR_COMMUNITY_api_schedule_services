import { Router } from "express";

const authenticateRoutes = Router();
const authenticateUserController;

authenticateRoutes.post("/sessions");

export { authenticateRoutes };
