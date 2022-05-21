import { inject, injectable } from "tsyringe";

import { Scheduling } from "@modules/schedulings/infra/entities/Scheduling";
import { ISchedulingsRepository } from "@modules/schedulings/repositories/ISchedulingsRepository";

@injectable()
class ListSchedulingsUseCase {
  constructor(
    @inject("SchedulingsRepository")
    private schedulingsRepository: ISchedulingsRepository,
  ) {}

  async execute(): Promise<Scheduling[]> {
    const schedulings = await this.schedulingsRepository.listAll();

    return schedulings;
  }
}

export { ListSchedulingsUseCase };
