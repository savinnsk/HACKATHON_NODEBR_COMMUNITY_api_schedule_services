import "reflect-metadata"
import express from "express"
import { router  } from "./routes";
import { AppDataSource } from "../typeorm/data-source"

const app = express()
app.use(express.json());
app.use(router)






AppDataSource.initialize().then(async () => {
   console.log("database conected")
   await app.listen(3000 , ci)

}).catch(error => console.log(error))


    

