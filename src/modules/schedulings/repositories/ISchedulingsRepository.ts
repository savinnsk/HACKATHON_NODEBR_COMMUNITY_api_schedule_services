import { ICreateSchedulingDTO } from "../dto/ICreateSchedulingDTO";
import { ISearchDTO } from "../dto/ISearchDTO";
import { Scheduling } from "../infra/entities/Scheduling";

interface ISchedulingsRepository {
  create(data: ICreateSchedulingDTO): Promise<Scheduling>;
  findById(id: string): Promise<Scheduling>;
  listAll(): Promise<Scheduling[]>;
  searchByParameters({ description, type }: ISearchDTO): Promise<Scheduling[]>;
}

export { ISchedulingsRepository };
