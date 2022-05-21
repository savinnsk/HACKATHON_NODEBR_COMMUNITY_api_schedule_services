import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSchedulingUseCase } from "./CreateSchedulingUseCase";

class CreateSchedulingController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { type, description, price, service_provider, appointments } =
      request.body;

    const createSchedulingUseCase = container.resolve(CreateSchedulingUseCase);

    await createSchedulingUseCase.execute({
      type,
      description,
      price,
      service_provider,
      appointments,
    });

    return response.status(201);
  }
}

export { CreateSchedulingController };
