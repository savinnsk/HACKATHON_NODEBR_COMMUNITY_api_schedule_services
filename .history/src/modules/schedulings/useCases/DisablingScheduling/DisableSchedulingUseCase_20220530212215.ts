import { inject, injectable } from "tsyringe";

import { SchedulingsRepository } from "@modules/schedulings/infra/repositories/SchedulingsRepository";
import { ServiceProvidersRepository } from "@modules/service_providers/infra/repositories/ServiceProvidersRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class DisableSchedulingUseCase {
  constructor(
    @inject("SchedulingsRepository")
    private schedulingsRepository: SchedulingsRepository,
    @inject("ServiceProvidersRepository")
    private serviceProvidersRepository: ServiceProvidersRepository
  ) {}

  async execute(id: string, service_provider_id: string): Promise<void> {
    const serviceProvider = await this.serviceProvidersRepository.findById(
      service_provider_id
    );
    const scheduling = await this.schedulingsRepository.findById(id);

    if (!scheduling) {
      throw new AppError("The scheduling does't exists");
    }

    if (scheduling.service_provider_id !== serviceProvider.id) {
      throw new AppError("the service provider is not the owner");
    }

    await this.schedulingsRepository.disableScheduling(scheduling.id);
  }
}

export { DisableSchedulingUseCase };
