import { ICreateUserDTO } from "../dto/ICreateUserDTO";
import { User } from "../infra/entities/User";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  enableServiceProvider(id: string): Promise<void>;
}

export { IUsersRepository };
