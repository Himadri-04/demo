import { Order } from 'sequelize';

export interface IOptions {
  limit?: number;
  offset?: number;
  order?: Order;
}

export enum IErrorNamesEnum {
  SequelizeDatabaseError = 'SequelizeDatabaseError',
  SequelizeConnectionRefusedError = 'SequelizeConnectionRefusedError',
}

export interface IParaforgeFilters {
  longitude: number;
  latitude: number;
  Category: string;
  text: string;
  allocation_code: string;
  usr_AUMseek__mm_: number;
  count: number;
}
