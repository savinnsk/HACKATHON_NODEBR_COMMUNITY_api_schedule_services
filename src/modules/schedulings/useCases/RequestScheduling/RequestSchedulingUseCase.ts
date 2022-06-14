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

    if (!appointment) throw new AppError("A marcação do horário não existe");

    if (!appointment.available)
      throw new AppError("A marcação do horário não está disponível");

    if (
      await this.dayjsDateProvider.compareIfBeforeNow(
        appointment.appointment_time
      )
    ) {
      throw new AppError("A marcação do horário precisa ser no futuro");
    }

    if (appointment.scheduling.service_provider_id === user_id)
      throw new AppError("O usuário não pode ser o prestador do serviço");

    const appointmentRequest =
      await this.appointmentsRepository.updateUserOnAppointment(
        appointment.id,
        user_id
      );

    return appointment;
  }
}

export { RequestSchedulingUseCase };
