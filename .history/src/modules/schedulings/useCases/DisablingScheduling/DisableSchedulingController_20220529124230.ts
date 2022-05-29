import { Request, Response } from "express";
import { container } from "tsyringe";

import { DisableSchedulingUseCase } from "./DisableSchedulingUseCase";

class DisableSchedulingController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const { service_provider } = request;

    const disableScheduling = container.resolve(DisableSchedulingUseCase);

    await disableScheduling.execute(id);

    return response.status(201).send();
  }
}

export { DisableSchedulingController };
