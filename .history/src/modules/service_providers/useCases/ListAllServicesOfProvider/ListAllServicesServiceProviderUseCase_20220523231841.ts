import { injectable, inject } from "tsyringe";

@injectable()
class ListAllServicesOfProvider {
  constructor(
    @inject("ServiceProvidersRepository")
    private serviceProvidersRepository
  ) {}

  async execute();
}

export { ListAllServicesOfProvider };
