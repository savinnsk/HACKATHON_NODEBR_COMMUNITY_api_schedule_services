import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { ServiceProvider } from "@modules/service_providers/infra/entities/ServiceProvider";

import { Appointment } from "./Appointment";

@Entity("schedulings")
class Scheduling {
  @PrimaryColumn()
  id: string;

  @Column()
  type: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  service_provider_id: string;

  @JoinColumn({ name: "service_provider_id" })
  @ManyToOne(() => ServiceProvider)
  serviceProvider: ServiceProvider;

  @Column()
  available_status: boolean;

  @Column()
  deleted_at: Date;

  @OneToMany(() => Appointment, (appointment) => appointment.scheduling)
  appointments: Appointment[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Scheduling };
