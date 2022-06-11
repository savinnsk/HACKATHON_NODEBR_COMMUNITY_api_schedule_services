// import dayjs from "dayjs";
import { getRepository, Repository } from "typeorm";

import { ICreateAppointmentDTO } from "@modules/schedulings/dto/ICreateAppointmentDTO";
import { IAppointmentsRepository } from "@modules/schedulings/Interfacerepositories/IAppointmentsRepository";

import { Appointment } from "../entities/Appointment";
import { IUpdateFeedbackDTO } from "@modules/schedulings/dto/IUpdateFeedbackDTO";

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

  async findById(id: string): Promise<Appointment> {
    // eslint-disable-next-line no-useless-catch
    try {
      return await this.repository
        .createQueryBuilder("appointment")
        .innerJoinAndSelect("appointment.scheduling", "scheduling")
        .where("appointment.id = :id", {
          id,
        })
        .getOne();
    } catch (err) {
      throw err;
    }
  }

  async updateUserOnAppointment(
    id: string,
    user_id: string
  ): Promise<Appointment> {
    await this.repository
      .createQueryBuilder()
      .update(Appointment)
      .set({
        user_id,
        available: false,
      })
      .where("id = :id", {
        id,
      })
      .execute();

    const appointment = await this.repository.findOne(id);

    return appointment;
  }

  async updateFeedbackOnAppointment({
    id,
    comment,
    rating,
  }: IUpdateFeedbackDTO): Promise<Appointment> {
    await this.repository
      .createQueryBuilder()
      .update(Appointment)
      .set({
        comment,
        rating
      })
      .where("id = :id", {
        id,
      })
      .execute();

    const appointment = await this.repository.findOne(id);

    return appointment;
  }
}

export { AppointmentsRepository };
