import { Router } from "express";

const authenticateRoutes = Router();

authenticateRoutes.post("/sessions");

export { authenticateRoutes };
