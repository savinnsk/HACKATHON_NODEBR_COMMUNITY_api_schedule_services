import { Request, Response } from "express";
import { container } from "tsyringe";

class RequestSchedulingController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: appointment_id } = request.params;
    const { id: user_id } = request.user;

    const listSchedulingsUseCase = container.resolve(ListSchedulingsUseCase);

    await listSchedulingsUseCase.execute(appointment_id, user_id);

    return response.send();
  }
}

export { RequestSchedulingController };
