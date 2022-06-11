import { inject, injectable } from "tsyringe";

import { Appointment } from "@modules/schedulings/infra/entities/Appointment";
import { IAppointmentsRepository } from "@modules/schedulings/Interfacerepositories/IAppointmentsRepository";
import { IUsersRepository } from "@modules/users/InterfaceRepositories/IUsersRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "@shared/errors/AppError";

@injectable()
class RequestSchedulingUseCase {
  constructor(
    @inject("AppointmentsRepository")
    private appointmentsRepository: IAppointmentsRepository,
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("DayjsDateProvider")
    private dayjsDateProvider: IDateProvider
  ) {}

  async execute(appointment_id: string, user_id: string): Promise<Appointment> {
    const appointment = await this.appointmentsRepository.findById(
      appointment_id
    );

    if (!appointment) throw new AppError("Appointment not exists");

    if (!appointment.available)
      throw new AppError("Appointment is not available");

    // validar se o horário do agendamento é no passado
    if (
      await this.dayjsDateProvider.compareIfBeforeNow(
        appointment.appointment_time
      )
    ) {
      throw new AppError("Appointment must to be on the future");
    }

    if (appointment.scheduling.service_provider_id === user_id)
      throw new AppError("Request not allowed");

    const appointmentRequest =
      await this.appointmentsRepository.updateUserOnAppointment(
        appointment.id,
        user_id
      );

    return appointment;
  }
}

export { RequestSchedulingUseCase };
