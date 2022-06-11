import { Response, Request } from "express";
import { container } from "tsyringe";

import { ListUserAllServicesUseCase } from "./ListUserAllServicesUseCase";

class ListUserAllServicesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listUserAllServicesUseCase = container.resolve(
      ListUserAllServicesUseCase
    );

    const services = await listUserAllServicesUseCase.execute(id);

    return response.send(services);
  }
}

export { ListUserAllServicesController };
