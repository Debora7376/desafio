import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTableProdutos1603762004752 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'produtos',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'nome_do_produto',
                    type: 'varchar',
                },
                {
                    name: 'fabricante',
                    type: 'varchar',
                },
                {
                    name: 'quantidade_em_estoque',
                    type: 'integer',
                },
                {
                    name: 'valor',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('produtos');
    }

}
