import { Request, Response } from "express";
import { container } from "tsyringe";

import { UsersRepository } from "@modules/users/infra/repositories/UsersRepository";
import { AppError } from "@shared/errors/AppError";

import { EditUserUseCase } from "./EditUserUseCase";

class EditUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, contact, address, email, password } = request.body;

    const { id } = request.params;

    const editUserCase = container.resolve(EditUserUseCase);
    const usersRepository = container.resolve(UsersRepository);

    const user = await usersRepository.findById(id);

    if (!user) {
      throw new AppError("User doesn't exists");
    }

    if (user.id !== id) {
      throw new AppError("User doesn't exists");
    }

    await editUserCase.execute({
      id,
      name,
      contact,
      address,
      email,
      password,
    });

    return response.status(200).send("User was updated with success");
  }
}

export { EditUserController };
