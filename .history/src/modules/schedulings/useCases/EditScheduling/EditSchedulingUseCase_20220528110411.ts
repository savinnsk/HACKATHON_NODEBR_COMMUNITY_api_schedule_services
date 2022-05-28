import { inject, injectable } from "tsyringe";

import { SchedulingsRepository } from "@modules/schedulings/infra/repositories/SchedulingsRepository";

@injectable()
class EditSchedulingUseCase {
  constructor(
    @inject("")
    private schedulingRepository: SchedulingsRepository
  ) {}
}

export { EditSchedulingUseCase };
