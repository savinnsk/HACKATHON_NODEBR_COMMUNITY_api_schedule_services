import { inject, injectable } from "tsyringe";

import { SchedulingsRepository } from "@modules/schedulings/infra/repositories/SchedulingsRepository";
import { ServiceProvidersRepository } from "@modules/service_providers/infra/repositories/ServiceProvidersRepository";

@injectable()
class DeleteSchedulingUseCase {
  constructor(
    @inject("SchedulingsRepository")
    private schedulingRepository: SchedulingsRepository,
    @inject("ServiceProvidersRepository")
    private serviceProviderRepository: ServiceProvidersRepository
  ) {}

  async execute(id: string, service_provider_id: string): Promise<void> {
    const serviceProvider = await this.serviceProviderRepository.findById(id);
    const scheduling = await this.schedulingRepository.findById(id);

    await this.schedulingRepository.deleteScheduling(id);
  }
}

export { DeleteSchedulingUseCase };
