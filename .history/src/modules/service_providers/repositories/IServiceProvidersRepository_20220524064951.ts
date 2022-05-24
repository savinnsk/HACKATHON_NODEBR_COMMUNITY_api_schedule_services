import { ICreateServiceProviderDTO } from "../dto/ICreateServiceProviderDTO";
import { ServiceProvider } from "../infra/entities/ServiceProvider";

interface IServiceProvidersRepository {
  create(data: ICreateServiceProviderDTO): Promise<void>;
  findByEmail(email: string): Promise<ServiceProvider>;
  findById(id: string): Promise<ServiceProvider>;
  listAllServices(id: string);
}

export { IServiceProvidersRepository };
