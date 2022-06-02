import { verify } from "crypto";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { EditUserUseCase } from "./EditUserUseCase";

class EditUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, contact, address, email, password } = request.body;

    const { id } = request.params;

    const authHeader = request.headers.authorization;

    // const decoded = verify();
    console.log(auth);

    const editUserCase = container.resolve(EditUserUseCase);

    await editUserCase.execute({
      id,
      name,
      contact,
      address,
      email,
      password,
    });

    return response.status(200).send();
  }
}

export { EditUserController };
