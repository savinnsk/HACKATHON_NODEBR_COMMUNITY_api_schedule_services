import { inject, injectable } from "tsyringe";

@injectable()
class EditUserUseCase {
    constructor(@inject("UsersRepository"))

  async execute(name): Promise<void> {}
}

export { EditUserUseCase };
