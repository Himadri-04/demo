
import { IDatabaseObject } from "./baseModel.interface";

export interface IRoles extends IDatabaseObject {
  name: string;
  slug: string;
}
