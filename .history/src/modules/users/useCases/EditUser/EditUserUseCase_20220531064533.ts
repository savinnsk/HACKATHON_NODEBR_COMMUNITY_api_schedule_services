import { injectable } from "tsyringe";

@injectable
class EditUserUseCase {
  async execute(name): Promise<void> {}
}

export { EditUserUseCase };
