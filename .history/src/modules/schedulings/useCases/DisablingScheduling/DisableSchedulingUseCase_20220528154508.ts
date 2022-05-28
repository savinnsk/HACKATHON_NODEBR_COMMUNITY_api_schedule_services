import { inject, injectable } from "tsyringe";

import { SchedulingsRepository } from "@modules/schedulings/infra/repositories/SchedulingsRepository";

@injectable()
class DisableSchedulingUseCase {
  constructor(
    @inject("SchedulingsRepository")
    private schedulingsRepository: SchedulingsRepository
  ) {}

  async execute(id: string): Promise<void> {
    const scheduling = await this.schedulingsRepository.findById(id);

    const disableScheduling = scheduling.available_status : false;

    await this.schedulingsRepository.disableScheduling(
      scheduling.id,
      scheduling.available_status
    );
  }
}

export { DisableSchedulingUseCase };
