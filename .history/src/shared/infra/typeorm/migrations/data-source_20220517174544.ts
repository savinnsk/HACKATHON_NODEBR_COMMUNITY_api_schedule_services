import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "docker",
  database: "rental",
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: [],
});
