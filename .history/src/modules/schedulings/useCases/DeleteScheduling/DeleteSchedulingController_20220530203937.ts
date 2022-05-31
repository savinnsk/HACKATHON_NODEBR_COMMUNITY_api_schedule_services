import { Response, Request } from "express";
import { container } from "tsyringe";

import { DeleteSchedulingUseCase } from "./DeleteSchedulingUseCase";

class DeleteSchedulingController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const { service_provider } = request.service_provider;

    const deleteSchedulingUseCase = container.resolve(DeleteSchedulingUseCase);

    await deleteSchedulingUseCase.execute(id, service_provider);

    return response.status(200).send();
  }
}

export { DeleteSchedulingController };
