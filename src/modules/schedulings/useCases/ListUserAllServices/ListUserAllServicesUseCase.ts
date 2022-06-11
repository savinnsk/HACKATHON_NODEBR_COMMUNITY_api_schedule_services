import { injectable, inject } from "tsyringe";

import { ISchedulingsRepository } from "@modules/schedulings/Interfacerepositories/ISchedulingsRepository";

@injectable()
class ListUserAllServicesUseCase {
  constructor(
    @inject("SchedulingsRepository")
    private schedulingsRepository: ISchedulingsRepository
  ) {}

  async execute(user_id) {
    const services = await this.schedulingsRepository.findSchedulingsByUser(
      user_id
    );

    return services;
  }
}

export { ListUserAllServicesUseCase };
