import { inject, injectable } from "tsyringe";

import { ISearchDTO } from "@modules/schedulings/dto/ISearchDTO";
import { Scheduling } from "@modules/schedulings/infra/entities/Scheduling";
import { ISchedulingsRepository } from "@modules/schedulings/repositories/ISchedulingsRepository";

@injectable()
class ListSchedulingsUseCase {
  constructor(
    @inject("SchedulingsRepository")
    private schedulingsRepository: ISchedulingsRepository
  ) {}

  async execute({ description, type }: ISearchDTO): Promise<Scheduling[]> {
    const schedulings = await this.schedulingsRepository.searchByParameters({
      description,
      type,
    });

    return schedulings;
  }
}

export { ListSchedulingsUseCase };
