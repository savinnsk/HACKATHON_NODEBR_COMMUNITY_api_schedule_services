import { injectable, inject } from "tsyringe";

@injectable()
class ListAllServicesOfProvider {
  constructor(
    @inject("ds")
    private ser
  ) {}

  async execute();
}

export { ListAllServicesOfProvider };
