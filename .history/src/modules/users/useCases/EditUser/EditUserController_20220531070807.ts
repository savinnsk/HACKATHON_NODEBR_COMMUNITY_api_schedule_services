import { Request, Response } from "express";
import { container } from "tsyringe";

import { EditUserUseCase } from "./EditUserUseCase";

class EditUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, contact, address, email, password } = request.body;

    const {} = request;

    const editUserCase = container.resolve(EditUserUseCase);

    editUserCase.execute({ name, contact, address, email, password });
    return response.status(200).send();
  }
}

export { EditUserController };
