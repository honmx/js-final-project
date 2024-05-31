import { UserType } from "../../../../types/UserType";

export const getUsersFilteredByNameOrEmail = (
  users: UserType[],
  value: string
) => {
  return users.filter(
    (user) =>
      user.first_name.toLowerCase().includes(value.toLowerCase()) ||
      user.last_name.toLowerCase().includes(value.toLowerCase()) ||
      user.email.toLowerCase().includes(value.toLowerCase())
  );
};
