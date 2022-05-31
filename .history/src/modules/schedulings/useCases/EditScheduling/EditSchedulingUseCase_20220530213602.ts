import { inject, injectable } from "tsyringe";

import { IEditSchedulingDTO } from "@modules/schedulings/dto/IEditSchedulingDTO";
import { SchedulingsRepository } from "@modules/schedulings/infra/repositories/SchedulingsRepository";

@injectable()
class EditSchedulingUseCase {
  constructor(
    @inject("SchedulingsRepository")
    private schedulingRepository: SchedulingsRepository,
    @inject("ServiceProvidersRepository")
  ) {}

  async execute(
    { id, type, description, price }: IEditSchedulingDTO,
    service_provider_id: string
  ): Promise<void> {
    await this.schedulingRepository.editScheduling({
      id,
      type,
      description,
      price,
    });
  }
}

export { EditSchedulingUseCase };
