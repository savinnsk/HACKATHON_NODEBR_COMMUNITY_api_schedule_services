import { ICreateAppointmentDTO } from "../dto/ICreateAppointmentDTO";
import { Appointment } from "../infra/entities/Appointment";

interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<void>;
  findById(id: string): Promise<Appointment>;
}

export { IAppointmentsRepository };
