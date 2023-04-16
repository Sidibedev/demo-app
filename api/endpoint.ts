import { UserRegisterInput } from "../types";
import axiosInstance from "./config";


export const createUser = (user: UserRegisterInput) => {
    return axiosInstance.post(`users/create`, user);
  };