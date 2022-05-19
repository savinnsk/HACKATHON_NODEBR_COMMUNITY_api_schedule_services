import {MigrationInterface, QueryRunner, Table} from "typeorm";

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
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "available",
                        type: "boolean",
                        default: "true",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKSchedulingId",
                        referencedTableName: "schedulings",
                        referencedColumnNames: ["id"],
                        columnNames: ["scheduling_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("appointments");
    }

}
