import "reflect-metadata"
import express from "express"
import { router  } from "./routes";

const app = express()
app.use(express.json());
app.use(router)

import { AppDataSource } from "../typeorm/data-source"
import { User } from "../../modules/users/entity/User"



AppDataSource.initialize().then(async () => {

   console.log("database conected")

}).catch(error => console.log(error))
