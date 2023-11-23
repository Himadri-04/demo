import { Column, Model, Table, DataType, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
// import { IDatabaseObject } from '@app/common/interfaces';
import { Optional } from 'sequelize';
import { IDatabaseObject } from '../../interfaces/baseModel.interface';

export type IDatabaseObjectCreationAttribute<T> = Optional<IDatabaseObject & T, 'id'>;

@Table({ timestamps: true })
export default class BaseModel<T> extends Model<IDatabaseObject & T, IDatabaseObjectCreationAttribute<T>> {
  @Column({ type: DataType.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true })
  declare id: number;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;

  @DeletedAt
  declare deletedAt: Date;
}
