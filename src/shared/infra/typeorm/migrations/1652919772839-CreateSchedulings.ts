import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSchedulings1652919772839 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "schedulings",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "type",
                        type: "varchar"
                    },
                    {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name: "price",
                        type: "numeric"
                    },
                    {
                        name: "service_provider_id",
                        type: "uuid",
                    },
                    {
                        name: "available_status",
                        type: "boolean",
                        default: "true"
                    },
                    {
                        name: "deleted_at",
                        type: "timestamp",
                        isNullable: true
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("schedulings");
    }

}
