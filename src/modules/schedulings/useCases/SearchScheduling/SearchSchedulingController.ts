import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSchedulingsUseCase } from "./SearchSchedulingUseCase";

class SearchSchedulingController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description, type } = request.query;

    const listSchedulingsUseCase = container.resolve(ListSchedulingsUseCase);

    const schedulings = await listSchedulingsUseCase.execute({
      description,
      type,
    });

    return response.json(schedulings);
  }
}

export { SearchSchedulingController };
