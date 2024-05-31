import { UserType } from "../../types/UserType";

export type GetUserParamsType = {
  id: number;
};

export type GetUserResponseType = {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
  support: {
    url: string;
    text: string;
  };
};
