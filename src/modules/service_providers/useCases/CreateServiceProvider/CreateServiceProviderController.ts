import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateServiceProviderUseCase } from "./CreateServiceProviderUseCase";

class CreateServiceProviderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, contact, address, email, password } = request.body;

    const createServiceProviderUseCase = container.resolve(
      CreateServiceProviderUseCase
    );

    await createServiceProviderUseCase.execute({
      name,
      contact,
      address,
      email,
      password,
    });

    return response.status(201).send();
  }
}

export { CreateServiceProviderController };
