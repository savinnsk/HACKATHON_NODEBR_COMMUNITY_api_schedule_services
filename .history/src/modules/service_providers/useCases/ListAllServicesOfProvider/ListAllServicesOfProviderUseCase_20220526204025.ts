import { injectable, inject } from "tsyringe";

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

    return this.serviceProvidersRepository.listAllServices(serviceProvider.id);
  }
}

export { ListAllServicesOfProviderUseCase };
