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

  async execute({
    description,
    type,
    page = 1,
    limit = 5,
  }: ISearchDTO): Promise<Scheduling[]> {
    const schedulings = await this.schedulingsRepository.searchByParameters({
      description,
      type,
      page,
      limit,
    });

    return schedulings;
  }
}

export { ListSchedulingsUseCase };
