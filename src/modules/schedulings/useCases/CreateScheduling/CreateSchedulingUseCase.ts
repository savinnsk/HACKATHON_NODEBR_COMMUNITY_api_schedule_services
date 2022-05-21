import { inject, injectable } from "tsyringe";

import { ISchedulingsRepository } from "@modules/schedulings/repositories/ISchedulingsRepository";

interface IRequest {
  type: string;
  description: string;
  price: number;
  service_provider: string;
  appointments: Date[];
}

@injectable()
class CreateSchedulingUseCase {
  constructor(
    @inject("SchedulingsRepository")
    private schedulingsRepository: ISchedulingsRepository
  ) {}

  async execute({
    type,
    description,
    price,
    service_provider,
    appointments,
  }: IRequest) {
    console.log("ok1");

    await this.schedulingsRepository.create({
      type,
      description,
      price,
      service_provider,
      appointments,
    });
  }
}

export { CreateSchedulingUseCase };
