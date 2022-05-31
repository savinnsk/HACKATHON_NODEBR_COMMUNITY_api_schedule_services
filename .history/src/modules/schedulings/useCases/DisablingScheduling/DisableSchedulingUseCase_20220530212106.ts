import { inject, injectable } from "tsyringe";

import { SchedulingsRepository } from "@modules/schedulings/infra/repositories/SchedulingsRepository";
import { ServiceProvidersRepository } from "@modules/service_providers/infra/repositories/ServiceProvidersRepository";

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

    await this.schedulingsRepository.disableScheduling(scheduling.id);
  }
}

export { DisableSchedulingUseCase };
