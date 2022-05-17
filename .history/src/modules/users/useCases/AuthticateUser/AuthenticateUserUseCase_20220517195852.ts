import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";

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
    }
  }
}

export { AuthenticateUserUseCase };
