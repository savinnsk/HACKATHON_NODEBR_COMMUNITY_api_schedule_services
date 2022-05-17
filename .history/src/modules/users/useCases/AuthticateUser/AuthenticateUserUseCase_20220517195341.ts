import { inject, injectable } from "tsyringe";

interface IRequest {
  email: string;
  senha: string;
}

@injectable()
class AuthenticateUserUseCase {

    constructor

  async execute({ email, senha }: IRequest) {}
}

export { AuthenticateUserUseCase };
