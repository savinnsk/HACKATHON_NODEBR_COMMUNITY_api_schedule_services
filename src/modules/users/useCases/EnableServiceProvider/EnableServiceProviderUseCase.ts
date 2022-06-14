import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/users/InterfaceRepositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class EnableServiceProviderUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(id: string): Promise<void> {
    const user = await this.usersRepository.findServiceProviderById(id);

    if (user) throw new AppError("Usuário já é um prestador de serviço");

    await this.usersRepository.enableServiceProvider(id);
  }
}

export { EnableServiceProviderUseCase };
