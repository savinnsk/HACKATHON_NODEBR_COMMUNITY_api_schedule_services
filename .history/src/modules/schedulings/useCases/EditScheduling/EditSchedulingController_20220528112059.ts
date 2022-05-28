import { Response, Request } from "express";
import { container } from "tsyringe";

import { EditSchedulingUseCase } from "./EditSchedulingUseCase";

class EditSchedulingController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { type, description, available_status, price } = request.body;

    const editSchedulingUseCase = container.resolve(EditSchedulingUseCase);
  }
}

export { EditSchedulingController };
