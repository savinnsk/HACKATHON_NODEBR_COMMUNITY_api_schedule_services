import { Response, Request } from "express";
import { container } from "tsyringe";

import { EditSchedulingUseCase } from "./EditSchedulingUseCase";

class EditSchedulingController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { type, description, available_status, price } = request.body;

    const { id } = request.service_provider;
    const { idScheduling } = request.params;

    const editSchedulingUseCase = container.resolve(EditSchedulingUseCase);

    await editSchedulingUseCase.execute({
      service_provider_id: id,
      service_id,
      type,
      description,
      available_status,
      price,
    });

    return response.status(201).send();
  }
}

export { EditSchedulingController };
