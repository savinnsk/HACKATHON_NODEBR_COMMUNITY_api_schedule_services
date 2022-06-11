import { inject, injectable } from "tsyringe";

import { Appointment } from "@modules/schedulings/infra/entities/Appointment";
import { IAppointmentsRepository } from "@modules/schedulings/Interfacerepositories/IAppointmentsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  user_id: string;
  appointment_id: string;
  comment: string;
  rating: number;
}

@injectable()
class UpdateFeedbackUseCase {
  constructor(
    @inject("AppointmentsRepository")
    private appointmentsRepository: IAppointmentsRepository
  ) {}

  async execute({
    user_id,
    appointment_id,
    comment,
    rating,
  }: IRequest): Promise<Appointment> {
    let appointment = await this.appointmentsRepository.findById(
      appointment_id
    );

    if (!(rating >= 1 && rating <= 5))
      throw new AppError("Nota de avaliação incorreta");

    if (!appointment) throw new AppError("Agendamento não existe");

    if (appointment.comment && appointment.rating)
      throw new AppError("Feedback já enviado anteriormente");

    if (!(appointment.user_id && !appointment.available))
      throw new AppError("Serviço ainda não foi solicitado");

    if (appointment.user_id !== user_id) throw new AppError("Usuário inválido");

    appointment = await this.appointmentsRepository.updateFeedbackOnAppointment(
      {
        id: appointment_id,
        comment,
        rating,
      }
    );

    return appointment;
  }
}

export { UpdateFeedbackUseCase };
