import { Response, Request } from "express";
import { container } from "tsyringe";

import { ListAllServicesOfProviderUseCase } from "./ListAllServicesOfProviderUseCase";

class ListAllServicesOfProviderController {
  async handle(request: Request, reponse: Response) {
    const { id } = request.body;

    const listAllServicesOfProviderUseCase = container.resolve(
      ListAllServicesOfProviderUseCase
    );
  }
}

export { ListAllServicesOfProviderController };
