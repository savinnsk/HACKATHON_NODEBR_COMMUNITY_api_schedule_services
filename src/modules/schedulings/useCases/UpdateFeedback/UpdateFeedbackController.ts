import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateFeedbackUseCase } from "./UpdateFeedbackUseCase";

class UpdateFeedbackController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { comment, rating } = request.body;
    const { id: appointment_id } = request.params;

    const { id: user_id } = request.user;

    const updateFeedbackUseCase = container.resolve(UpdateFeedbackUseCase);

    await updateFeedbackUseCase.execute({
      user_id,
      appointment_id,
      comment,
      rating,
    });

    return response.send();
  }
}

export { UpdateFeedbackController };
