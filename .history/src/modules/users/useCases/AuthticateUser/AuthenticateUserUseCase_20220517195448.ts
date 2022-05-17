import { inject, injectable } from "tsyringe";

interface IRequest {
  email: string;
  senha: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
      @inject("UsersRepository")
  ) {}

  async execute({ email, senha }: IRequest) {}
}

export { AuthenticateUserUseCase };
