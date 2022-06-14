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
      throw new AppError("O agendamento não existe");
    }

    if (scheduling.service_provider_id !== service_provider_id) {
      throw new AppError("O prestador de serviço não é o dono");
    }

    await this.schedulingsRepository.disableScheduling(scheduling.id);
  }
}

export { DisableSchedulingUseCase };
