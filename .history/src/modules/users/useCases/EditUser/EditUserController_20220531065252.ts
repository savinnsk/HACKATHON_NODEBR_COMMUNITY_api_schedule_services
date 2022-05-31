import { Request, Response } from "express";
import { container } from "tsyringe";

import { EditUserUseCase } from "./EditUserUseCase";

class EditUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, contact, anddress, email, password } = request.body;

    const editUserCase = container.resolve(EditUserUseCase);

    editUserCase.execute({});
    return response.status(200).send();
  }
}

export { EditUserController };
