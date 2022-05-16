import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("usuarios")
class User {
  @PrimaryColumn()
  id: string;

  @Column({ name: "nome" })
  name: string;

  @Column({ name: "telefone" })
  contact: string;

  @Column({ name: "endereco" })
  address: string;

  @Column()
  email: string;

  @Column({ name: "senha" })
  password: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
