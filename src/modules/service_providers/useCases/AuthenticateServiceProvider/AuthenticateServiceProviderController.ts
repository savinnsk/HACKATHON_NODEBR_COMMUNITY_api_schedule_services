import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateServiceProviderUseCase } from "./AuthenticateServiceProviderUseCase";

class AuthenticateServiceProviderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, email } = request.body;

    const authenticateServiceProviderUseCase = container.resolve(
      AuthenticateServiceProviderUseCase
    );

    const token = await authenticateServiceProviderUseCase.execute({
      password,
      email,
    });

    return response.json(token);
  }
}

export { AuthenticateServiceProviderController };
