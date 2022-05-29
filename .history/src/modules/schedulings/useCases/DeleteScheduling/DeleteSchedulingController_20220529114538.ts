import { Response, Request } from "express";
import { container } from "tsyringe";

import { DeleteSchedulingUseCase } from "./DeleteSchedulingUseCase";

class DeleteSchedulingController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const deleteSchedulingUseCase = container.resolve(DeleteSchedulingUseCase);

    await deleteSchedulingUseCase.execute(id);

    return response.status(200).send();
  }
}

export { DeleteSchedulingController };
