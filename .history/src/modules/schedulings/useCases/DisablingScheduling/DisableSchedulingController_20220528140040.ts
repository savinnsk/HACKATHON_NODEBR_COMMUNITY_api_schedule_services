import { Request, Response } from "express";
import { container } from "tsyringe";

import { DisableSchedulingUseCase } from "./DisableSchedulingUseCase";

class DisableSchedulingController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const disableScheduling = container.resolve(DisableSchedulingUseCase);

    disableScheduling.execute(id);
  }
}

export { DisableSchedulingController };
