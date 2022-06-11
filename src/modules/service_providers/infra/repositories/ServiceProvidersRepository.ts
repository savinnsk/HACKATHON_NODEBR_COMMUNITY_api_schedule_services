import { getRepository, Repository } from "typeorm";

// import { Scheduling } from "@modules/schedulings/infra/entities/Scheduling";
import { ICreateServiceProviderDTO } from "@modules/service_providers/dto/ICreateServiceProviderDTO";
import { IServiceProvidersRepository } from "@modules/service_providers/repositories/IServiceProvidersRepository";

import { ServiceProvider } from "../entities/ServiceProvider";

class ServiceProvidersRepository implements IServiceProvidersRepository {
  private repository: Repository<ServiceProvider>;

  constructor() {
    this.repository = getRepository(ServiceProvider);
  }

  async create({
    name,
    contact,
    address,
    email,
    password,
  }: ICreateServiceProviderDTO): Promise<void> {
    const serviceProvider = this.repository.create({
      name,
      contact,
      address,
      email,
      password,
    });

    await this.repository.save(serviceProvider);
  }

  async findByEmail(email: string): Promise<ServiceProvider> {
    const serviceProvider = await this.repository.findOne({ email });

    return serviceProvider;
  }

  async findById(id: string): Promise<ServiceProvider> {
    const serviceProvider = await this.repository.findOne(id);

    return serviceProvider;
  }

  async listAllServices(id: string): Promise<ServiceProvider[]> {
    return this.repository
      .createQueryBuilder("service_provider")
      .leftJoinAndSelect("service_provider.schedulings", "schedulings")
      .select([
        "service_provider.name",
        "service_provider.contact",
        "service_provider.address",
        "service_provider.email",
        "schedulings.type",
        "schedulings.description",
        "schedulings.price",
        "schedulings.available_status",
        "schedulings.deleted_at",
      ])
      .where("service_provider.id = :id", { id })
      .getMany();
  }
}

export { ServiceProvidersRepository };