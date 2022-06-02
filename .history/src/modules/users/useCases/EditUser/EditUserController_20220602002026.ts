import { Request, Response } from "express";
import { container } from "tsyringe";

import { UsersRepository } from "@modules/users/infra/repositories/UsersRepository";

import { EditUserUseCase } from "./EditUserUseCase";

class EditUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, contact, address, email, password } = request.body;

    const { id } = request.params;

    const usersRepository = container.resolve(UsersRepository);
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
