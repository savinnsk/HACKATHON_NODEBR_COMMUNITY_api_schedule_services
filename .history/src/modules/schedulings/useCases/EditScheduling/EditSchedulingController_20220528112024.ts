import { Response, Request } from "express";
import { container } from "tsyringe";

import { EditSchedulingUseCase } from "./EditSchedulingUseCase";

class EditSchedulingController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {} = request.body;

    const editSchedulingUseCase = container.resolve(EditSchedulingUseCase);
  }
}

export { EditSchedulingController };
