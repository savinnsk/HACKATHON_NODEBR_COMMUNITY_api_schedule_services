import { Response, Request } from "express";
import { container } from "tsyringe";

import { EditSchedulingUseCase } from "./EditSchedulingUseCase";

class EditSchedulingController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { type, description, available_status, price } = request.body;

    const { id } = request.params;
    console.log("erro", id);

    const editSchedulingUseCase = container.resolve(EditSchedulingUseCase);

    const schedulingUpdated = await editSchedulingUseCase.execute({
      id,
      type,
      description,
      available_status,
      price,
    });

    return response.status(201).send(schedulingUpdated);
  }
}

export { EditSchedulingController };
