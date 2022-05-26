import { injectable, inject } from "tsyringe";

import { ServiceProvider } from "@modules/service_providers/infra/entities/ServiceProvider";
import { IServiceProvidersRepository } from "@modules/service_providers/repositories/IServiceProvidersRepository";

@injectable()
class ListAllServicesOfProviderUseCase {
  constructor(
    @inject("ServiceProvidersRepository")
    private serviceProvidersRepository: IServiceProvidersRepository
  ) {}

  async execute(service_provider_id) {
    const serviceProvider = await this.serviceProvidersRepository.findById(
      service_provider_id
    );

    return await this.serviceProvidersRepository.listAllServices(id);
  }
}

export { ListAllServicesOfProviderUseCase };
