import { inject, injectable } from "tsyringe";

import { IAppointmentsRepository } from "@modules/schedulings/Interfacerepositories/IAppointmentsRepository";

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
