import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "@modules/users/dto/ICreateUserDTO";
import { IEditUserDTO } from "@modules/users/dto/IEditUserDTO";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";

import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findServiceProviderById(id: string): Promise<User> {
    const user = await this.repository.find({
      where: {
        id,
        service_provider: true,
      },
    });

    return user.length ? user[0] : null;
  }

  async enableServiceProvider(id: string): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .update(User)
      .set({
        service_provider: true,
      })
      .where("id =:id", { id })
      .execute();
  }

  async create({
    name,
    contact,
    address,
    email,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      contact,
      address,
      email,
      password,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository
      .createQueryBuilder("users")
      .where("LOWER(users.email) like :email", {
        email: `${email.toLocaleLowerCase()}`,
      })
      .getOne();

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);

    return user;
  }

  async edit({
    id,
    name,
    contact,
    address,
    email,
    password,
  }: IEditUserDTO): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .update(User)
      .set({
        name: `${name}`,
        contact: `${contact}`,
        address: `${address}`,
        email: `${email}`,
        password: `${password}`,
      })
      .where("id =:id", { id })
      .execute();
  }
}

export { UsersRepository };
