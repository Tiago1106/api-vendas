import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMedico1628550795966 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        // vamos criar a tabela no PostgreSQL
        await queryRunner.createTable(new Table({
            name: 'medico',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'area',
                    type: 'varchar'
                },
                {
                    name: 'idade',
                    type: 'int'
                },
                {
                    name: 'crm',
                    type: 'int'
                },
                {
                    name: 'created_at',
                    type: 'timestamp with time zone',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp with time zone',
                    default: 'now()'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('medico')
    }

}
