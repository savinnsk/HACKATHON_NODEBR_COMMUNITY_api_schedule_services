import { inject, injectable } from "tsyringe";

import { IEditSchedulingDTO } from "@modules/schedulings/dto/IEditSchedulingDTO";
import { SchedulingsRepository } from "@modules/schedulings/infra/repositories/SchedulingsRepository";

@injectable()
class EditSchedulingUseCase {
  constructor(
    @inject("SchedulingsRepository")
    private schedulingRepository: SchedulingsRepository
  ) {}

  async execute({
    scheduling_id,
    type,
    description,
    price,
    available_status,
  }: IEditSchedulingDTO): Promise<void> {
    await this.schedulingRepository.editScheduling({
      scheduling_id,
      type,
      description,
      price,
      available_status,
    });
  }
}

export { EditSchedulingUseCase };
