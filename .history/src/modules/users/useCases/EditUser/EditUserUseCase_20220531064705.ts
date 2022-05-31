import { inject, injectable } from "tsyringe";

import { UsersRepository } from "@modules/users/infra/repositories/UsersRepository";

@injectable()
class EditUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: UsersRepository
  ) {}

  async execute(name): Promise<void> {}
}

export { EditUserUseCase };
