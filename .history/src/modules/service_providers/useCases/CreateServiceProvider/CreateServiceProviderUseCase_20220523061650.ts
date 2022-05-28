import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { ICreateServiceProviderDTO } from "@modules/service_providers/dto/ICreateServiceProviderDTO";
import { IServiceProvidersRepository } from "@modules/service_providers/repositories/IServiceProvidersRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateServiceProviderUseCase {
  constructor(
    @inject("ServiceProvidersRepository")
    private serviceProvidersRepository: IServiceProvidersRepository
  ) {}

  async execute({
    name,
    contact,
    address,
    email,
    password,
  }: ICreateServiceProviderDTO): Promise<void> {
    const serviceProviderAlreadyExists =
      await this.serviceProvidersRepository.findByEmail(email);

    if (serviceProviderAlreadyExists) {
      throw new AppError("Prestador de serviço já existe");
    }

    const passwordHash = await hash(password, 8);

    await this.serviceProvidersRepository.create({
      name,
      contact,
      address,
      email,
      password: passwordHash,
    });
  }
}

export { CreateServiceProviderUseCase };
