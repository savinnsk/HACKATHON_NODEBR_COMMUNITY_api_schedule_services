import { container } from "tsyringe";

import { ServiceProvidersRepository } from "@modules/service_providers/infra/repositories/ServiceProvidersRepository";
import { IServiceProvidersRepository } from "@modules/service_providers/repositories/IServiceProvidersRepository";
import { UsersRepository } from "@modules/users/infra/repositories/UsersRepository";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IServiceProvidersRepository>(
  "ServiceProvidersRepository",
  ServiceProvidersRepository
);
