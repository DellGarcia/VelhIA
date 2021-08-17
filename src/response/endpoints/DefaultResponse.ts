export interface DefaultResponse<T> {
  code: number;
  success: boolean;
  message: string;
  data: T;
}
