import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "@modules/users/dto/ICreateUserDTO";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { ValidateUser } from "./ValidateUser";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute(user: ICreateUserDTO): Promise<void> {

    try {

      /** throw exception in case of error or user no valid */
      new ValidateUser(user)
        .exec();

      const { email, password, } = user;
      const userAlreadyExists = await this.usersRepository.findByEmail(email);

      if (userAlreadyExists)
        throw new AppError("User already exists");

      await this.usersRepository.create({
        ...user, password: await hash(password, 8),
      });

    } catch (error) {
      throw new AppError(error, 500)
    }
  }
}

export { CreateUserUseCase };
