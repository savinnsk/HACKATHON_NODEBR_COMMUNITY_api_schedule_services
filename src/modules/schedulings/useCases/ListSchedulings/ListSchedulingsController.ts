import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSchedulingsUseCase } from "./ListSchedulingsUseCase";

class ListSchedulingsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listSchedulingsUseCase = container.resolve(ListSchedulingsUseCase);

    const schedulings = await listSchedulingsUseCase.execute();

    return response.json(schedulings);
  }
}

export { ListSchedulingsController };
