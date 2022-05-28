import { SchedulingsRepository } from "@modules/schedulings/infra/repositories/SchedulingsRepository";

class EditSchedulingUseCase {
  constructor(private schedulingRepository: SchedulingsRepository) {}
}

export { EditSchedulingUseCase };
