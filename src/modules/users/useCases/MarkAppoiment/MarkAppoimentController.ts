import { Request, Response } from "express";
import { container } from "tsyringe";

class MarkAppoimentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { scheduling_id } = request.body;

    const userId = request.headers.id;

    console.log(`test${userId}`, scheduling_id);

    const markAppoimentUseCase = container.resolve(MarkAppoimentController);

    markAppoimentUseCase.handle(userId, scheduling_id);

    return response.status(200).send();
  }
}

export { MarkAppoimentController };
