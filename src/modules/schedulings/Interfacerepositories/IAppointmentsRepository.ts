import { ICreateAppointmentDTO } from "../dto/ICreateAppointmentDTO";
import { IUpdateFeedbackDTO } from "../dto/IUpdateFeedbackDTO";
import { Appointment } from "../infra/entities/Appointment";

interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<void>;
  findById(id: string): Promise<Appointment>;
  updateUserOnAppointment(id: string, user_id: string): Promise<Appointment>;
  updateFeedbackOnAppointment(data: IUpdateFeedbackDTO): Promise<Appointment>;
}

export { IAppointmentsRepository };
