import { inject, injectable } from "tsyringe";

import { SchedulingsRepository } from "@modules/schedulings/infra/repositories/SchedulingsRepository";
import { AppError } from "@shared/errors/AppError";
import { ISchedulingsRepository } from "@modules/schedulings/repositories/ISchedulingsRepository";

@injectable()
class DeleteSchedulingUseCase {
  constructor(
    @inject("SchedulingsRepository")
    private schedulingRepository: ISchedulingsRepository,
  ) {}

  async execute(id: string, service_provider_id: string): Promise<void> {
    const scheduling = await this.schedulingRepository.findById(id);

    if (!scheduling) {
      throw new AppError("The scheduling doesn't exists");
    }

    if (scheduling.service_provider_id !== service_provider_id) {
      throw new AppError("the service provider is not the owner");
    }

    await this.schedulingRepository.deleteScheduling(id);
  }
}

export { DeleteSchedulingUseCase };
