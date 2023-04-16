import HTTP_STATUS_CODES from "./constants/StatusCode";

export interface UserRegisterInput {
    fullname: string;
    email: string;
    password: string;
  }


  export type QueryResultType<T> = {
    results: {
      status: HTTP_STATUS_CODES;
      message: string;
      data: T;
    };
  };
  