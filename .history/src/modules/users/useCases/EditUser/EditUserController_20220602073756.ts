import { verify } from "crypto";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { EditUserUseCase } from "./EditUserUseCase";

class EditUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, contact, address, email, password } = request.body;

    const { id } = request.params;

    const authHeader = request.headers.authorization;
    const [, token] = authHeader.split(" ");

   try {
    const { sub: user_id } = verify(
      token,
      // secret key
      auth.user_secret_token
    ) as IPayload;

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
