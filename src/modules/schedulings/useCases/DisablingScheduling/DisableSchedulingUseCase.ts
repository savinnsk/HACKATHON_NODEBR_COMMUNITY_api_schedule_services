import { inject, injectable } from "tsyringe";

import { ISchedulingsRepository } from "@modules/schedulings/Interfacerepositories/ISchedulingsRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class DisableSchedulingUseCase {
  constructor(
    @inject("SchedulingsRepository")
    private schedulingsRepository: ISchedulingsRepository
  ) {}

  async execute(id: string, service_provider_id: string): Promise<void> {
    const scheduling = await this.schedulingsRepository.findById(id);

    if (!scheduling) {
      throw new AppError("The scheduling does't exists");
    }

    if (scheduling.service_provider_id !== service_provider_id) {
      throw new AppError("the service provider is not the owner");
    }

    await this.schedulingsRepository.disableScheduling(scheduling.id);
  }
}

export { DisableSchedulingUseCase };
