import "reflect-metadata";
import { DataSource } from "typeorm";

import { CreateUsers1652657332889 } from "./migrations/1652657332889-CreateUsers";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "docker",
  database: "scheduling",
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: [],
});
