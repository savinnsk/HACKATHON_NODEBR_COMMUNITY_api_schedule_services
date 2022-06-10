import { inject, injectable } from "tsyringe";

import { Appointment } from "@modules/schedulings/infra/entities/Appointment";
import { Scheduling } from "@modules/schedulings/infra/entities/Scheduling";
import { IAppointmentsRepository } from "@modules/schedulings/repositories/IAppointmentsRepository";
import { ISchedulingsRepository } from "@modules/schedulings/repositories/ISchedulingsRepository";
import { IServiceProvidersRepository } from "@modules/service_providers/repositories/IServiceProvidersRepository";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";

@injectable()
class RequestSchedulingUseCase {
  constructor(
    @inject("SchedulingsRepository")
    private schedulingsRepository: ISchedulingsRepository,
    @inject("AppointmentsRepository")
    private appointmentsRepository: IAppointmentsRepository,
    @inject("ServiceProvidersRepository")
    private serviceProvidersRepository: IServiceProvidersRepository,
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(appointment_id: string, user_id: string): Promise<Appointment> {
    //verifico se o agendamento existe

    //verificar se o agendamento nao esta ocupado

    //validar se o horário do agendamento ainda é valido -> pelo menos 1 horas antes

    //fazer uma consulta para retornar o id do servico

    //pesquisa pelo id do servico o prestador de servico

    //o email do prestador de servico nao pode ser igual ao do usuario atual

    //atualizar o agendamento
  }
}

export { RequestSchedulingUseCase };
