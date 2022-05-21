import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { User } from "@modules/users/infra/entities/User";

import { Scheduling } from "./Scheduling";

@Entity("appointments")
class Appointment {
  @PrimaryColumn()
  id: string;

  @Column()
  scheduling_id: string;

  @JoinColumn({ name: "scheduling_id" })
  @ManyToOne(() => Scheduling)
  scheduling: Scheduling;

  @Column()
  appointment_time: Date;

  @Column()
  available: boolean;

  @Column()
  user_id: string;

  @JoinColumn({ name: "user_id" })
  @ManyToOne(() => User)
  user: User;

  @Column()
  rating: number;

  @Column()
  comment: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Appointment };
