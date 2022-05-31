import { inject, injectable } from "tsyringe";

import { IEditSchedulingDTO } from "@modules/schedulings/dto/IEditSchedulingDTO";
import { SchedulingsRepository } from "@modules/schedulings/infra/repositories/SchedulingsRepository";
import { ServiceProvidersRepository } from "@modules/service_providers/infra/repositories/ServiceProvidersRepository";

@injectable()
class EditSchedulingUseCase {
  constructor(
    @inject("SchedulingsRepository")
    private schedulingRepository: SchedulingsRepository,
    @inject("ServiceProvidersRepository")
    private serviceProvidersRepository: ServiceProvidersRepository
  ) {}

  async execute(
    { id, type, description, price }: IEditSchedulingDTO,
    service_provider_id: string
  ): Promise<void> {
    const serviceProvider = await this.serviceProvidersRepository.findById(
      service_provider_id
    );

    const scheduling = await this.schedulingRepository.findById(id);

    await this.schedulingRepository.editScheduling({
      id,
      type,
      description,
      price,
    });
  }
}

export { EditSchedulingUseCase };
