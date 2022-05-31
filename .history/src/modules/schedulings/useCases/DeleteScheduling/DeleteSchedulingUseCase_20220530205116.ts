import { inject, injectable } from "tsyringe";

import { SchedulingsRepository } from "@modules/schedulings/infra/repositories/SchedulingsRepository";
import { ServiceProvidersRepository } from "@modules/service_providers/infra/repositories/ServiceProvidersRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class DeleteSchedulingUseCase {
  constructor(
    @inject("SchedulingsRepository")
    private schedulingRepository: SchedulingsRepository,
    @inject("ServiceProvidersRepository")
    private serviceProviderRepository: ServiceProvidersRepository
  ) {}

  async execute(id: string, service_provider_id: string): Promise<void> {
    const serviceProvider = await this.serviceProviderRepository.findById(
      service_provider_id
    );
    const scheduling = await this.schedulingRepository.findById(id);

    if (scheduling.service_provider_id !== serviceProvider.id) {
      throw new AppError(
        "the service provider is not the ownerO Provedor de serviço"
      );
    }
    await this.schedulingRepository.deleteScheduling(id);
  }
}

export { DeleteSchedulingUseCase };