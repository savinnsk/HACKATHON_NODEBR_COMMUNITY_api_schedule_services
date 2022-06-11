import { ICreateSchedulingDTO } from "../dto/ICreateSchedulingDTO";
import { IEditSchedulingDTO } from "../dto/IEditSchedulingDTO";
import { ISearchDTO } from "../dto/ISearchDTO";
import { Scheduling } from "../infra/entities/Scheduling";

interface ISchedulingsRepository {
  create(data: ICreateSchedulingDTO): Promise<Scheduling>;
  findById(id: string): Promise<Scheduling>;
  listAll(): Promise<Scheduling[]>;
  searchByParameters({ description, type }: ISearchDTO): Promise<Scheduling[]>;
  findSchedulingsByServiceProvider(id: string): Promise<Scheduling[]>;
  findSchedulingsByUser(id: string): Promise<Scheduling[]>;
  deleteScheduling(id: string): Promise<void>;
  disableScheduling(id: string): Promise<void>;
  editScheduling(data: IEditSchedulingDTO): Promise<void>;
}

export { ISchedulingsRepository };
