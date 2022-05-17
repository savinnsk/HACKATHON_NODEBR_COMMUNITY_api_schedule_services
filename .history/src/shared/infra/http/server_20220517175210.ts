import { AppDataSource } from "../typeorm/data-source";
import { app } from "./app";

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("database started");
  } catch (err) {
    console.log(`Error : ${err}`);
  } finally {
    app.listen(3333, () => console.log("server running!"));
  }
}

main();
