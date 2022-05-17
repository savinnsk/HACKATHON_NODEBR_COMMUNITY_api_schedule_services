import { Request, Response } from "express";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { password, email } = request.body;
  }
}

export { AuthenticateUserController };
