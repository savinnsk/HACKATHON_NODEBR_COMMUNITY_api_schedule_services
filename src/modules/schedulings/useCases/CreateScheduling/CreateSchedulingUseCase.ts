import { inject, injectable } from "tsyringe";

import { IAppointmentsRepository } from "@modules/schedulings/repositories/IAppointmentsRepository";
import { ISchedulingsRepository } from "@modules/schedulings/repositories/ISchedulingsRepository";

interface IRequest {
  type: string;
  description: string;
  price: number;
  service_provider: string;
  appointments: Date[];
}

interface ISchedulingDTO {
  id: string;
}

@injectable()
class CreateSchedulingUseCase {
  constructor(
    @inject("SchedulingsRepository")
    private schedulingsRepository: ISchedulingsRepository,
    @inject("AppointmentsRepository")
    private appointmentsRepository: IAppointmentsRepository
  ) {}

  async execute({
    type,
    description,
    price,
    service_provider,
    appointments,
  }: IRequest) {
    const scheduling = (await this.schedulingsRepository.create({
      type,
      description,
      price,
      service_provider,
    })) as ISchedulingDTO;

    await this.appointmentsRepository.create({
      scheduling: scheduling.id,
      appointment_time: appointments,
    });
  }
}

export { CreateSchedulingUseCase };
