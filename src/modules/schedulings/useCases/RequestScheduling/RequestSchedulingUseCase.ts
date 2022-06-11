import { inject, injectable } from "tsyringe";

import { Appointment } from "@modules/schedulings/infra/entities/Appointment";
import { Scheduling } from "@modules/schedulings/infra/entities/Scheduling";
import { IAppointmentsRepository } from "@modules/schedulings/repositories/IAppointmentsRepository";
import { ISchedulingsRepository } from "@modules/schedulings/repositories/ISchedulingsRepository";
import { IServiceProvidersRepository } from "@modules/service_providers/repositories/IServiceProvidersRepository";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "@shared/errors/AppError";

@injectable()
class RequestSchedulingUseCase {
  constructor(
    @inject("SchedulingsRepository")
    private schedulingsRepository: ISchedulingsRepository,
    @inject("AppointmentsRepository")
    private appointmentsRepository: IAppointmentsRepository,
    @inject("ServiceProvidersRepository")
    private serviceProvidersRepository: IServiceProvidersRepository,
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("DayjsDateProvider")
    private dayjsDateProvider: IDateProvider
  ) {}

  async execute(appointment_id: string, user_id: string): Promise<Appointment> {
    // verifico se o agendamento existe
    const appointment = await this.appointmentsRepository.findById(
      appointment_id
    );

    if (!appointment) throw new AppError("Appointment not exists");

    if (!appointment.available)
      throw new AppError("Appointment is not available");

    // validar se o horário do agendamento ainda é valido -> pelo menos 1 horas antes
    if (
      await this.dayjsDateProvider.compareIfBeforeNow(
        appointment.appointment_time
      )
    ) {
      throw new AppError("Appointment must to be on the future");
    }

    const serviceProvider = await this.serviceProvidersRepository.findById(
      appointment.scheduling.service_provider_id
    );

    const user = await this.usersRepository.findById(user_id);

    if (serviceProvider.email === user.email)
      throw new AppError("Request not allowed");

    console.log(appointment);

    // atualizar o agendamento com o id do usuario

    return appointment;
  }
}

export { RequestSchedulingUseCase };
