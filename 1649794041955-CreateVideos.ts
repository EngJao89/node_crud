import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCategories1649792885862 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "videos",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "name",
            type: "varchar",
            isUnique: true
          },
          {
            name: "description",
            type: "varchar"
          },
          {
            name: "category_id",
            type: "uuid"
          },
          {
            name: "duration",
            type: "numeric"
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()"
          }
        ],
        foreignKeys: [
          {
            name: "fk_video_category",
            columnNames: ["category_id"],
            referencedTableName: "categories",
            referencedColumnName: ["id"]

          }
        ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('videos')
  }

}
