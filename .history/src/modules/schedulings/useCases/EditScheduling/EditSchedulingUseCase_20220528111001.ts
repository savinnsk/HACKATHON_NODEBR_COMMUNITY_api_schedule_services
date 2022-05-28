import { inject, injectable } from "tsyringe";

import { Scheduling } from "@modules/schedulings/infra/entities/Scheduling";
import { SchedulingsRepository } from "@modules/schedulings/infra/repositories/SchedulingsRepository";

@injectable()
class EditSchedulingUseCase {
  constructor(
    @inject("SchedulingRepository")
    private schedulingRepository: SchedulingsRepository
  ) {}

  async execute({
    id,
    type,
    description,
    price,
    available_status,
  }: Scheduling): Promise<void> {
    this.schedulingRepository.editScheduling(
      id,
      type,
      description,
      price,
      available_status
    );
  }
}

export { EditSchedulingUseCase };
