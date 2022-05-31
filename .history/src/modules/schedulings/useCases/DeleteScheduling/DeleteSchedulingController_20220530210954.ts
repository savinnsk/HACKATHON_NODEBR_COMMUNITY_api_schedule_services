import { Response, Request } from "express";
import { container } from "tsyringe";

import { DeleteSchedulingUseCase } from "./DeleteSchedulingUseCase";

class DeleteSchedulingController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    console.log(id);
    const { service_provider } = request;

    const deleteSchedulingUseCase = container.resolve(DeleteSchedulingUseCase);

    await deleteSchedulingUseCase.execute(id, service_provider.id);

    return response.status(200).send();
  }
}

export { DeleteSchedulingController };
