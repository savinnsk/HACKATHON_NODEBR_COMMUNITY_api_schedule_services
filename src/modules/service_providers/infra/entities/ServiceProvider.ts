import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Scheduling } from "@modules/schedulings/infra/entities/Scheduling";

@Entity("service_providers")
class ServiceProvider {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  contact: string;

  @Column()
  address: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Scheduling, (scheduling) => scheduling.serviceProvider)
  schedulings: Scheduling[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { ServiceProvider };
