import { Request, Response } from "express";
import { container } from "tsyringe";

import { RequestSchedulingUseCase } from "./RequestSchedulingUseCase";

class RequestSchedulingController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: appointment_id } = request.params;
    const { id: user_id } = request.user;

    const requestSchedulingUseCase = container.resolve(
      RequestSchedulingUseCase
    );

    await requestSchedulingUseCase.execute(appointment_id, user_id);

    return response.send();
  }
}

export { RequestSchedulingController };
