import { injectable, inject } from "tsyringe";

import { IServiceProvidersRepository } from "@modules/service_providers/repositories/IServiceProvidersRepository";

@injectable()
class ListAllServicesOfProvider {
  constructor(
    @inject("ServiceProvidersRepository")
    private serviceProvidersRepository: IServiceProvidersRepository
  ) {}

  async execute(id: string) {
    const services = await this.serviceProvidersRepository.listAllServices(id);

    return services;
  }
}

export { ListAllServicesOfProvider };
