import { compare } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  email: string;
  senha: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, senha }: IRequest) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Email ou senha incorreta");
    }

    const passwordMatch = await compare(user, senha);
  }
}

export { AuthenticateUserUseCase };
