import { Response, Request } from "express";

class ListAllServicesOfProviderController {
  async handle(request: Request, reponse: Response) {
    const { id } = request.body;
  }
}

export { ListAllServicesOfProviderController };
