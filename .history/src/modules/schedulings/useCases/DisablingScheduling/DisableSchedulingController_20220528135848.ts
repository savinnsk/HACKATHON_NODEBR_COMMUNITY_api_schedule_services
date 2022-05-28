import { container } from "tsyringe";

import { DisableSchedulingUseCase } from "./DisableSchedulingUseCase";

class DisableSchedulingController {
  async handle() {
    container.resolve(DisableSchedulingUseCase);
  }
}

export { DisableSchedulingController };
