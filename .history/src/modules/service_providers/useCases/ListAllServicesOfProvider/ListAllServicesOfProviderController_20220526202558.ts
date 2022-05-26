import { Response, Request } from "express";
import { container } from "tsyringe";

import { ListAllServicesOfProviderUseCase } from "./ListAllServicesOfProviderUseCase";

class ListAllServicesOfProviderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { service_provider } = request;
    console.log(service_provider);

    const listAllServicesOfProviderUseCase = container.resolve(
      ListAllServicesOfProviderUseCase
    );

    await listAllServicesOfProviderUseCase.execute(service_provider.id);

    return response.status(200).send();
  }
}

export { ListAllServicesOfProviderController };
