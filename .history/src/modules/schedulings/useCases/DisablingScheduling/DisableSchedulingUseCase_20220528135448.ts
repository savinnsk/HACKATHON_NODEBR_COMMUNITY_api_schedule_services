import { inject, injectable } from "tsyringe";

import { SchedulingsRepository } from "@modules/schedulings/infra/repositories/SchedulingsRepository";

@injectable()
class DisableSchedulingUseCase {
  constructor(
    @inject("SchedulingRepository")
    private schedulingsRepository: SchedulingsRepository
  ) {}
}

export { DisableSchedulingUseCase };
