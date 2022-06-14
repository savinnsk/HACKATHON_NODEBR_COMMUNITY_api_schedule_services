import { inject, injectable } from "tsyringe";

import { IEditSchedulingDTO } from "@modules/schedulings/dto/IEditSchedulingDTO";
import { ISchedulingsRepository } from "@modules/schedulings/Interfacerepositories/ISchedulingsRepository";
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
      throw new AppError("O agendamento não existe");
    }

    if (scheduling.service_provider_id !== service_provider_id) {
      throw new AppError("O prestador de serviço não é o dono");
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
