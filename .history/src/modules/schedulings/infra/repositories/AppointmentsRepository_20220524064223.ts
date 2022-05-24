import dayjs from "dayjs";
import { getRepository, Repository } from "typeorm";

import { ICreateAppointmentDTO } from "@modules/schedulings/dto/ICreateAppointmentDTO";
import { IAppointmentsRepository } from "@modules/schedulings/repositories/IAppointmentsRepository";

import { Appointment } from "../entities/Appointment";

class AppointmentsRepository implements IAppointmentsRepository {
  private repository: Repository<Appointment>;

  constructor() {
    this.repository = getRepository(Appointment);
  }

  async create({
    scheduling,
    appointment_time,
  }: ICreateAppointmentDTO): Promise<void> {
    // eslint-disable-next-line no-useless-catch
    try {
      appointment_time.forEach(async (time) => {
        const appointment = this.repository.create({
          scheduling_id: scheduling,
          appointment_time: time,
        });

        await this.repository.save(appointment);
      });
    } catch (err) {
      throw err;
    }
  }

  findById(id: string): Promise<Appointment> {
    throw new Error("Method not implemented.");
  }
}

export { AppointmentsRepository };
