import { Request } from "express";
import { container } from "tsyringe";

import { DisableSchedulingUseCase } from "./DisableSchedulingUseCase";

class DisableSchedulingController {
  async handle(request: Request, response) {
    container.resolve(DisableSchedulingUseCase);
  }
}

export { DisableSchedulingController };
