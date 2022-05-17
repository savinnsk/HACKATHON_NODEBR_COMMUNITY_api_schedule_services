import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
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

    const passwordMatch = await compare(user.password, senha);

    if (!passwordMatch) {
      throw new AppError("Email ou senha incorreta");
    }

    const token = sign(
      {
        // gerar webtoken
        // payload
      },
      // secret word md5 "batata"
      "9eb71ab7420eb452a22787ca4fab501b",
      { subject: user.id, expiresIn: "1d" }
    );
  }
}

export { AuthenticateUserUseCase };
