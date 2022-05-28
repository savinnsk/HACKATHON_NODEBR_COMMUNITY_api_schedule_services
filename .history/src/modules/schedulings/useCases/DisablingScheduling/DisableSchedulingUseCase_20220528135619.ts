import { inject, injectable } from "tsyringe";

import { SchedulingsRepository } from "@modules/schedulings/infra/repositories/SchedulingsRepository";

@injectable()
class DisableSchedulingUseCase {
  constructor(
    @inject("SchedulingsRepository")
    private schedulingsRepository: SchedulingsRepository
  ) {}

  async execute() {
      this.schedulingsRepository.disableScheduling({id : string, }){}
  }
}

export { DisableSchedulingUseCase };
