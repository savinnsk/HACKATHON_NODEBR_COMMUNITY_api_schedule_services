import { injectable } from "tsyringe";

import { SchedulingsRepository } from "@modules/schedulings/infra/repositories/SchedulingsRepository";

@injectable()
class DeleteSchedulingUseCase {
  constructor(private schedulingRepository: SchedulingsRepository) {}
}

export { DeleteSchedulingUseCase };
