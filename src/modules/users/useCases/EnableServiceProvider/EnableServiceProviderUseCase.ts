import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class EnableServiceProviderUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(id: string): Promise<void> {
    const user = await this.usersRepository.findById(id);

    if (user.service_provider)
      throw new AppError("User is already a service provider");

    await this.usersRepository.enableServiceProvider(id);
  }
}

export { EnableServiceProviderUseCase };
