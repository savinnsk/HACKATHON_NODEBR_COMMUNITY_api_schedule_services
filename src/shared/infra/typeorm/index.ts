import { Connection, createConnection, getConnectionOptions } from "typeorm";
import ORMCONFIG from '../../../../ormconfig.json'

export default async (host :string = undefined): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      host: host ?? ORMCONFIG.host,
      database: defaultOptions.database,
    })
  );
};
