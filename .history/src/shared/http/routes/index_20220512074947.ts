import {Router} from "express"
import { schedulingsRoutes } from "./scheduling.routes";
import { usersRoutes } from "./users.routes";

const router = Router()

router.use("/users" ,usersRoutes);
router.use("/services" ,servicesRoutes)

export {router}