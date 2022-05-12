import {Router} from "express"
import { servicesRoutes } from "./services.routes";

const router = Router()

router.use("/users" );
router.use("/services" ,servicesRoutes)

export {router}