import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAppointments1652920051619 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "appointments",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "scheduling_id",
            type: "uuid",
          },
          {
            name: "appointment_time",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "available",
            type: "boolean",
            default: "true",
          },
          {
            name: "user_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "rating",
            type: "numeric",
            isNullable: true,
          },
          {
            name: "comment",
            type: "varchar",
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: "FKSchedulingId",
            referencedTableName: "schedulings",
            referencedColumnNames: ["id"],
            columnNames: ["scheduling_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKUserId",
            referencedTableName: "usuarios",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("appointments");
  }
}
