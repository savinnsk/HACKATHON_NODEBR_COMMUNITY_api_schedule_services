import { Response, Request } from "express";
import { container } from "tsyringe";

import { ListAllServicesOfProviderUseCase } from "./ListAllServicesOfProviderUseCase";

class ListAllServicesOfProviderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.service_provider;

    const listAllServicesOfProviderUseCase = container.resolve(
      ListAllServicesOfProviderUseCase
    );

    const services = await listAllServicesOfProviderUseCase.execute(id);

    return response.status(200).send(services);
  }
}

export { ListAllServicesOfProviderController };
