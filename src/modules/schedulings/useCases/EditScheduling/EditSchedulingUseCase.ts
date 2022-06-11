import { inject, injectable } from "tsyringe";

import { IEditSchedulingDTO } from "@modules/schedulings/dto/IEditSchedulingDTO";
import { ISchedulingsRepository } from "@modules/schedulings/repositories/ISchedulingsRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class EditSchedulingUseCase {
  constructor(
    @inject("SchedulingsRepository")
    private schedulingRepository: ISchedulingsRepository
  ) {}

  async execute(
    { id, type, description, price }: IEditSchedulingDTO,
    service_provider_id: string
  ): Promise<void> {
    const scheduling = await this.schedulingRepository.findById(id);

    if (!scheduling) {
      throw new AppError("The scheduling doesn't exist");
    }

    if (scheduling.service_provider_id !== service_provider_id) {
      throw new AppError("the service provider is not the owner");
    }
    await this.schedulingRepository.editScheduling({
      id,
      type,
      description,
      price,
    });
  }
}

export { EditSchedulingUseCase };
