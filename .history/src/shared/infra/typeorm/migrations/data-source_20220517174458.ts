import "reflect-metadata"
import { DataSource } from "typeorm"

//entities
import { Category } from "../../modules/cars/infra/typeorm/entities/Category"
import { Specification } from "../../modules/cars/infra/typeorm/entities/Specification"
import { User } from "../../modules/accounts/infra/typeorm/entities/User"

//migrations
import {CreateCategories1650645101249} from "./migrations/1650645101249-CreateCategories"
import {CreateSpecifications1650724082632} from "./migrations/1650724082632-CreateSpecifications"
import { CreateUsers1650728905951 } from "./migrations/1650728905951-CreateUsers"
import { AlterUserDeleteUsername1650739686031 } from "./migrations/1650739686031-AlterUserDeleteUsername"
import { AlterUserAddAvatar1651190784550 } from "./migrations/1651190784550-alterUserAddAvatar"
import { CreateCars1652436065331 } from "./migrations/1652436065331-CreateCars"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "rental",
    synchronize: true,
    logging: false,
    entities: [
      Category,
      Specification,
      User
    ],
    migrations: 
    [
      CreateCategories1650645101249,
      CreateSpecifications1650724082632,
      CreateUsers1650728905951,
      AlterUserDeleteUsername1650739686031,
      AlterUserAddAvatar1651190784550,
      CreateCars1652436065331
    ],
    subscribers: [],

})
