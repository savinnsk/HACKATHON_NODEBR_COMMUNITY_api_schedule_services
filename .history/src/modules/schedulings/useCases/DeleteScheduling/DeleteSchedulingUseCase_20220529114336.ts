import { inject, injectable } from "tsyringe";

import { SchedulingsRepository } from "@modules/schedulings/infra/repositories/SchedulingsRepository";

@injectable()
class DeleteSchedulingUseCase {
  constructor(
    @inject("SchedulingsRepository")
    private schedulingRepository: SchedulingsRepository
  ) {}

  async execute(id: string): Promise<void> {
    this.schedulingRepository.deleteScheduling(id);
  }
}

export { DeleteSchedulingUseCase };
