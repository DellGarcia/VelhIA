import { EntityResponse } from "./EntityResponse";

export interface ColumnResponse extends EntityResponse {
  value: string;
  i: number;
  j: number;
}