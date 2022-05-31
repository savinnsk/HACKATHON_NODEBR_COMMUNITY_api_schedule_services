import { inject, injectable } from "tsyringe";

import { SchedulingsRepository } from "@modules/schedulings/infra/repositories/SchedulingsRepository";

@injectable()
class DisableSchedulingUseCase {
  constructor(
    @inject("SchedulingsRepository")
    private schedulingsRepository: SchedulingsRepository,
    @inject("ServiceProvidersRepository")
  ) {}

  async execute(id: string, service_provider_id: string): Promise<void> {
    const scheduling = await this.schedulingsRepository.findById(id);

    await this.schedulingsRepository.disableScheduling(scheduling.id);
  }
}

export { DisableSchedulingUseCase };
