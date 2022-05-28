import { Request, Response } from "express";
import { container } from "tsyringe";

import { DisableSchedulingUseCase } from "./DisableSchedulingUseCase";

class DisableSchedulingController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const disableScheduling = await container.resolve(DisableSchedulingUseCase);
  }
}

export { DisableSchedulingController };
