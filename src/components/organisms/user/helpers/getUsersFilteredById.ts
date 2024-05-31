import { UserFilterType } from "../../../../store/slices/usersSlice";
import { UserType } from "../../../../types/UserType";

export const getUsersFilteredById = (
  users: UserType[],
  filterType: UserFilterType
) => {
  if (filterType === "even") {
    return users.filter((user) => user.id % 2 === 0);
  }

  if (filterType === "odd") {
    return users.filter((user) => user.id % 2 === 1);
  }

  return users;
};
