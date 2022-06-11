import { Request, Response } from "express";
import { container } from "tsyringe";

import { EnableServiceProviderUseCase } from "./EnableServiceProviderUseCase";

class EnableServiceProviderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const enableServiceProviderUseCase = container.resolve(
      EnableServiceProviderUseCase
    );

    await enableServiceProviderUseCase.execute(id);

    return response.send();
  }
}

export { EnableServiceProviderController };
