import { Model } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { IDatabaseObject } from '../../interfaces/baseModel.interface';
export type IDatabaseObjectCreationAttribute<T> = Optional<IDatabaseObject & T, 'id'>;
export default class BaseModel<T> extends Model<IDatabaseObject & T, IDatabaseObjectCreationAttribute<T>> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
