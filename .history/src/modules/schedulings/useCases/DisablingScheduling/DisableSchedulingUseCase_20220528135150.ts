import { injectable } from "tsyringe";

import { SchedulingsRepository } from "@modules/schedulings/infra/repositories/SchedulingsRepository";

@injectable()
class DisableSchedulingUseCase {
  constructor(private schedulingsRepository: SchedulingsRepository);
}

export { DisableSchedulingUseCase };
