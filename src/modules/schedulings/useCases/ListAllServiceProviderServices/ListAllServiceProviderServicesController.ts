import { Response, Request } from "express";
import { container } from "tsyringe";

import { ListAllServiceProviderServicesUseCase } from "./ListAllServiceProviderServicesUseCase";

class ListAllServiceProviderServicesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.service_provider;

    const listAllServiceProviderServicesUseCase = container.resolve(
      ListAllServiceProviderServicesUseCase
    );

    const services = await listAllServiceProviderServicesUseCase.execute(
      id
    );

    return response.send(services);
  }
}

export { ListAllServiceProviderServicesController };
