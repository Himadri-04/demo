import { Column, Table, DataType } from 'sequelize-typescript';
// import { IUser } from '@app/common/interfaces';
import * as bcrypt from 'bcryptjs';
import BaseModel from './baseModal.modal';
import { IUser } from '../../interfaces/users.interface';
@Table({
  underscored: true,
  version: false,
  tableName: 'users',
  defaultScope: {
    attributes: {
      exclude: ['password'],
    },
  },
  scopes: {
    withPassword: {
      attributes: {
        include: ['password'],
      },
    },
  },
})
export class Users extends BaseModel<IUser> implements IUser {
  @Column({ type: DataType.NUMBER, autoIncrement: true })
  public id: number;

  @Column({ type: DataType.STRING })
  public firstName: string;

  @Column({ type: DataType.STRING })
  public lastName: string;

  @Column({ type: DataType.STRING })
  public email: string;

  @Column({ type: DataType.STRING })
  public password: string;

  @Column({ type: DataType.STRING(255) })
  public reset_password_token: string;

  @Column({ type: DataType.BOOLEAN })
  public isVerified: boolean;

  authenticate(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
  }
}
