import { Request, Response } from "express";

class EditUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {} = request.body;
    return response.status(200).send();
  }
}

export { EditUserController };
