import { inject, injectable } from "tsyringe";

import { SchedulingsRepository } from "@modules/schedulings/infra/repositories/SchedulingsRepository";

@injectable()
class DisableSchedulingUseCase {
  constructor(
    @inject("SchedulingsRepository")
    private schedulingsRepository: SchedulingsRepository
  ) {}

  async execute(id: string): Promise<void> {
    const { available_status, id } = await this.schedulingsRepository.findById(
      id
    );

    await this.schedulingsRepository.disableScheduling(
      scheduling.id,
      available_status
    );
  }
}

export { DisableSchedulingUseCase };
