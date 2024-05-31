import { UserType } from "../../types/UserType";

export type GetUsersParamsType = {
  page: number;
};

export type GetUsersResponseType = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserType[];
  support: {
    url: string;
    text: string;
  };
};
