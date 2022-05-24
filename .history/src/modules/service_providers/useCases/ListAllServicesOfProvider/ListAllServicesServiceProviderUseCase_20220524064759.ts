import { injectable, inject } from "tsyringe";

import { IServiceProvidersRepository } from "@modules/service_providers/repositories/IServiceProvidersRepository";

@injectable()
class ListAllServicesOfProvider {
  constructor(
    @inject("ServiceProvidersRepository")
    private serviceProvidersRepository: IServiceProvidersRepository
  ) {}

  async execute() {}
}

export { ListAllServicesOfProvider };
