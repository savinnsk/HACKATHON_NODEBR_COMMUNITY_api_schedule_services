import { Response, Request } from "express";
import { container } from "tsyringe";

import { EditSchedulingUseCase } from "./EditSchedulingUseCase";

class EditSchedulingController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { type, description, price } = request.body;

    const { id } = request.params;

    const editSchedulingUseCase = container.resolve(EditSchedulingUseCase);

    const schedulingUpdated = await editSchedulingUseCase.execute({
      id,
      type,
      description,
      price,
    });

    return response.status(201).send(schedulingUpdated);
  }
}

export { EditSchedulingController };
