import {Router} from "express"
import { servicesRoutes } from "./services.routes";
import { usersRoutes } from "./users.routes";

const router = Router()

router.use("/users" usersRoutes);
router.use("/services" ,servicesRoutes)

export {router}