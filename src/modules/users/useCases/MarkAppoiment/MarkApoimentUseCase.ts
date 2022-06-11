import { inject, injectable } from "tsyringe";

import { AppointmentsRepository } from "@modules/schedulings/infra/repositories/AppointmentsRepository";
import { IAppointmentsRepository } from "@modules/schedulings/Interfacerepositories/IAppointmentsRepository";
import { ISchedulingsRepository } from "@modules/schedulings/Interfacerepositories/ISchedulingsRepository";
import { IUsersRepository } from "@modules/users/InterfaceRepositories/IUsersRepository";

@injectable()
class MarkAppoimentUseCase {
  constructor(
    @inject("AppointmentsRepository")
    private appoimetsRepository: IAppointmentsRepository
  ) {}

  async execute(appoiment_id: string, user_id: string): Promise<void> {
    await this.appoimetsRepository.updateUserOnAppointment(
      appoiment_id,
      user_id
    );
  }
}

export { MarkAppoimentUseCase };
