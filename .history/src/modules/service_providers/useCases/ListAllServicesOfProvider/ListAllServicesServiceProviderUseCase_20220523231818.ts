import { injectable, inject } from "tsyringe";

@injectable()
class ListAllServicesOfProvider {
  constructor(
    @inject("ServiceProvidersRepository")
    private ser
  ) {}

  async execute();
}

export { ListAllServicesOfProvider };
