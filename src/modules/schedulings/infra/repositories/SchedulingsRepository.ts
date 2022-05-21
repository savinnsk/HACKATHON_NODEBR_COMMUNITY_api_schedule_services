import { getRepository, Repository } from "typeorm";

import { ICreateSchedulingDTO } from "@modules/schedulings/dto/ICreateSchedulingDTO";
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
    appointments,
  }: ICreateSchedulingDTO): Promise<void> {
    throw new Error("Method not implemented.");

    // const user = this.repository.create({
    //   name,
    //   contact,
    //   address,
    //   email,
    //   password,
    // });

    // await this.repository.save(user);
  }

  findById(id: string): Promise<Scheduling> {
    throw new Error("Method not implemented.");
  }
}

export { SchedulingsRepository };
