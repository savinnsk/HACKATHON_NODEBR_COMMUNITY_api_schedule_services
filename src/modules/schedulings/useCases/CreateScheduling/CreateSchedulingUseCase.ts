import { inject, injectable } from "tsyringe";

import { IAppointmentsRepository } from "@modules/schedulings/Interfacerepositories/IAppointmentsRepository";
import { ISchedulingsRepository } from "@modules/schedulings/Interfacerepositories/ISchedulingsRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "@shared/errors/AppError";

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
    private appointmentsRepository: IAppointmentsRepository,
    @inject("DayjsDateProvider")
    private dayjsDateProvider: IDateProvider
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

    // validando se a data que estou repassando está no futuro
    appointments.forEach(async (appointment) => {
      if (await this.dayjsDateProvider.compareIfBeforeNow(appointment))
        throw new AppError("Agendamento precisa ser no futuro");
    });

    await this.appointmentsRepository.create({
      scheduling: scheduling.id,
      appointment_time: appointments,
    });
  }
}

export { CreateSchedulingUseCase };
