import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

import auth from "../../../../config/auth.js";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateServiceProviderUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const serviceProvider = await this.usersRepository.findByEmail(email);

    if (!serviceProvider) {
      throw new AppError("Email ou senha incorreta");
    }

    if (!serviceProvider.service_provider)
      throw new AppError("Usuário não é prestador de serviço");

    const passwordMatch = await compare(password, serviceProvider.password);

    if (!passwordMatch) {
      throw new AppError("Email ou senha incorreta**");
    }

    const token = sign({}, auth.service_provider_secret_token, {
      subject: serviceProvider.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      token,
      service_provider: {
        name: serviceProvider.name,
        email: serviceProvider.email,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateServiceProviderUseCase };
