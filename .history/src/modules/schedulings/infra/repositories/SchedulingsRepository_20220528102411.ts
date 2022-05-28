import { getRepository, Repository } from "typeorm";

import { ICreateSchedulingDTO } from "@modules/schedulings/dto/ICreateSchedulingDTO";
import { ISearchDTO } from "@modules/schedulings/dto/ISearchDTO";
import { ISchedulingsRepository } from "@modules/schedulings/repositories/ISchedulingsRepository";

import { Scheduling } from "../entities/Scheduling";

class SchedulingsRepository implements ISchedulingsRepository {
  private repository: Repository<Scheduling>;

  constructor() {
    this.repository = getRepository(Scheduling);
  }

  async create({
    type,
    description,
    price,
    service_provider,
  }: ICreateSchedulingDTO): Promise<Scheduling> {
    const scheduling = this.repository.create({
      type,
      description,
      price,
      service_provider_id: service_provider,
    });

    await this.repository.save(scheduling);

    return scheduling;
  }

  findById(id: string): Promise<Scheduling> {
    throw new Error("Method not implemented.");
  }

  async listAll(): Promise<Scheduling[]> {
    return this.repository
      .createQueryBuilder("scheduling")
      .leftJoin("scheduling.appointments", "appointments")
      .select([
        "scheduling.type",
        "scheduling.description",
        "scheduling.price",
        "scheduling.available_status",
        "appointments.id",
        "appointments.appointment_time",
        "appointments.available",
      ])
      .getMany();
  }

  async searchByParameters({
    description,
    type,
    page,
    limit,
  }: ISearchDTO): Promise<Scheduling[]> {
    // const descriptionSanitized = description;

    const descriptionSanitized = description
      ? `%${description.toString().toLowerCase()}%`
      : null;

    // console.log(descriptionSanitized);
    const typeSanitized = type ? `%${type.toString().toLowerCase()}%` : null;

    return this.repository
      .createQueryBuilder("scheduling")
      .leftJoin("scheduling.appointments", "appointments")
      .select([
        "scheduling.type",
        "scheduling.description",
        "scheduling.price",
        "scheduling.available_status",
        "appointments.id",
        "appointments.appointment_time",
        "appointments.available",
      ])
      .where("LOWER(scheduling.type) like :type", {
        type: `%${typeSanitized}%`,
      })
      .orWhere("LOWER(scheduling.description) like :description", {
        description: `%${descriptionSanitized}%`,
      })
      .orderBy("scheduling.created_at", "ASC")
      .limit(limit)
      .offset((page - 1) * limit)
      .getMany();
  }

  async editScheduling({
    id,
    type,
    description,
    price,
    available_status,
  }: Scheduling): Promise<void> {
    this.repository
      .createQueryBuilder()
      .update(Scheduling)
      .set({
        type: `${type}`,
        description: `${description}`,
        price,
        available_status,
      });
  }
}

export { SchedulingsRepository };
