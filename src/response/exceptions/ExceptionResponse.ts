import { DefaultResponse } from "../endpoints/DefaultResponse";

export interface ExceptionResponse<T> extends DefaultResponse<T> {
  exceptionName: string;
}