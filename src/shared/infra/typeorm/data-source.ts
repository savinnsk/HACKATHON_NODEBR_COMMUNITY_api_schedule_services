import { User } from "@modules/users/infra/entities/User";

import "reflect-metadata";
import { DataSource } from "typeorm";

import { CreateUsers1652657332889 } from "./migrations/1652657332889-CreateUsers";
import { CreateServiceProviderUser1652659019701 } from "./migrations/1652659019701-CreateServiceProviderUser";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "docker",
  database: "scheduling",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [
    CreateUsers1652657332889,
    CreateServiceProviderUser1652659019701,
  ],
  subscribers: [],
});
