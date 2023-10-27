export interface ErrorResponse {
    time: string;
    path: string;
    status: string;
    errorMap: { [key: string]: string };
  }