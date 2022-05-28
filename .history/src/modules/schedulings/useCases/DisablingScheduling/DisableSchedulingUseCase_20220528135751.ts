import { inject, injectable } from "tsyringe";

import { SchedulingsRepository } from "@modules/schedulings/infra/repositories/SchedulingsRepository";

@injectable()
class DisableSchedulingUseCase {
  constructor(
    @inject("SchedulingsRepository")
    private schedulingsRepository: SchedulingsRepository
  ) {}

  async execute(id: string, available_status: boolean): Promise<void> {
    await this.schedulingsRepository.disableScheduling(id, available_status);
  }
}

export { DisableSchedulingUseCase };
