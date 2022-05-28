import { Response, Request } from "express";
import { container } from "tsyringe";

class EditSchedulingController {
  async handle(request: Request, response: Response): Promise<Response> {
    container;
  }
}

export { EditSchedulingController };
