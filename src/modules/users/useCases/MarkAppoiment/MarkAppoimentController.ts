import { Request, Response } from "express";

class MarkAppoimentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { scheduling_id } = request.body;

    return response.status(200).send();
  }
}
