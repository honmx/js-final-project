export type RegisterResponseType = {
  id: number;
  token: string;
};

export type RegisterParamsType = {
  name: string;
  email: string;
  password: string;
  avatar: string;
};
