import { SchedulingsRepository } from "@modules/schedulings/infra/repositories/SchedulingsRepository";

class DisableSchedulingUseCase {
  constructor(private schedulingsRepository: SchedulingsRepository);
}

export { DisableSchedulingUseCase };
