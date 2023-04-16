import { SUCCESS_STATUS } from "../constants/StatusCode";
import { QueryResultType } from "../types";



export const isSuccess = <T>(res: QueryResultType<T>): boolean => {
    return SUCCESS_STATUS.includes(res?.results?.status);
  };
  