import { injectable, inject } from "tsyringe";

import { ISchedulingsRepository } from "@modules/schedulings/Interfacerepositories/ISchedulingsRepository";

@injectable()
class ListAllServiceProviderServicesUseCase {
  constructor(
    @inject("SchedulingsRepository")
    private schedulingsRepository: ISchedulingsRepository
  ) {}

  async execute(service_provider_id) {
    const services =
      await this.schedulingsRepository.findSchedulingsByServiceProvider(
        service_provider_id
      );

    return services;
  }
}

export { ListAllServiceProviderServicesUseCase };
