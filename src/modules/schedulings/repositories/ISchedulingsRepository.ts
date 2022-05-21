import { ICreateSchedulingDTO } from "../dto/ICreateSchedulingDTO";
import { Scheduling } from "../infra/entities/Scheduling";

interface ISchedulingsRepository {
  create(data: ICreateSchedulingDTO): Promise<Scheduling>;
  findById(id: string): Promise<Scheduling>;
}

export { ISchedulingsRepository };
