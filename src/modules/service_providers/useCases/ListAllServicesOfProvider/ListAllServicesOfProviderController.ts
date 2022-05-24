import { Response, Request } from "express";
import { container } from "tsyringe";

import { ListAllServicesOfProviderUseCase } from "./ListAllServicesOfProviderUseCase";

class ListAllServicesOfProviderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const listAllServicesOfProviderUseCase = container.resolve(
      ListAllServicesOfProviderUseCase
    );

    await listAllServicesOfProviderUseCase.execute(id);

    return response.status(201).send();
  }
}

export { ListAllServicesOfProviderController };
