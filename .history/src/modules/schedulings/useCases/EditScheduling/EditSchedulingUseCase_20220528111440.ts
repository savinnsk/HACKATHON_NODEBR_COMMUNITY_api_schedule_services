import { inject, injectable } from "tsyringe";

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
  }: IRequest): Promise<void> {
    this.schedulingRepository.editScheduling({
      id,
      type,
      description,
      price,
      available_status,
    });
  }
}

export { EditSchedulingUseCase };
