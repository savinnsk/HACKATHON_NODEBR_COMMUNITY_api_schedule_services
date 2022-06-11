import { inject, injectable } from "tsyringe";

import { ISchedulingsRepository } from "@modules/schedulings/Interfacerepositories/ISchedulingsRepository";
import { IUsersRepository } from "@modules/users/InterfaceRepositories/IUsersRepository";

@injectable()
class MarkSchedulingUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("SchedulingsRepository")
    private schedulingRepository: ISchedulingsRepository
  ) {}

  async execute(user_id: string, scheduling_id: string) {}
}

export { MarkSchedulingUseCase };
