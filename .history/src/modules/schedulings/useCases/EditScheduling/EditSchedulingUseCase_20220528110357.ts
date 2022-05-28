import { injectable } from "tsyringe";

import { SchedulingsRepository } from "@modules/schedulings/infra/repositories/SchedulingsRepository";

@injectable()
class EditSchedulingUseCase {
  constructor(private schedulingRepository: SchedulingsRepository) {}
}

export { EditSchedulingUseCase };
