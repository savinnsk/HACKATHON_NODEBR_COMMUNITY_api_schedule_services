import { Request, Response } from "express";
import { container } from "tsyringe";

import { EditUserUseCase } from "./EditUserUseCase";

class EditUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    container.resolve(EditUserUseCase);
    return response.status(200).send();
  }
}

export { EditUserController };
