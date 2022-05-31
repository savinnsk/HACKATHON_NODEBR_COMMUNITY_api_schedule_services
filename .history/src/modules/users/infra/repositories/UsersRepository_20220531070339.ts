import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "@modules/users/dto/ICreateUserDTO";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";

import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
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
    const user = await this.repository.findOne({ email });

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);

    return user;
  }

  async edit({
    name,
    contact,
    address,
    email,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = await this.repository
      .createQueryBuilder()
      .update(User)
      .set({
        name: `${name}`,
        contact: `${contact}`,
        address: `${address}`,
        email: `${email}`,
        password: `${password}`,
      })
      .where("id =:id", {})
      .execute();
  }
}

export { UsersRepository };
