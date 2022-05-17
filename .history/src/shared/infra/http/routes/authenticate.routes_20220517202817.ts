import { Router } from "express";

const authenticateRoutes = Router();

authenticateRoutes.post("/session");

export { authenticateRoutes };
