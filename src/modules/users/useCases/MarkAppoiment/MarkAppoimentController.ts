import { Request, Response } from "express";
import { container } from "tsyringe";

import { MarkAppoimentUseCase } from "./MarkApoimentUseCase";

class MarkAppoimentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { appointment_id } = request.body;

    const { id } = request.user;
    const userId = id;

    const markAppoimentUseCase = container.resolve(MarkAppoimentUseCase);

    markAppoimentUseCase.execute(appointment_id, userId);

    return response.status(200).send();
  }
}

export { MarkAppoimentController };
