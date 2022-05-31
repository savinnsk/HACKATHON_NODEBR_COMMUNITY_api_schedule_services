import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "@modules/users/dto/ICreateUserDTO";
import { IEditUserDTO } from "@modules/users/dto/IEditUserDTO";
import { UsersRepository } from "@modules/users/infra/repositories/UsersRepository";

@injectable()
class EditUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: UsersRepository
  ) {}

  async execute({
    name,
    contact,
    address,
    email,
    password,
  }: IEditUserDTO): Promise<void> {
    await this.usersRepository.edit({
      id,
      name,
      contact,
      address,
      email,
      password,
    });
  }
}

export { EditUserUseCase };
