import { FC, ReactNode, useCallback } from "react";
import { UserType } from "../../../types/UserType";
import { Box, Grid } from "@mui/material";
import List from "../../molecules/List";
import UserCard from "./UserCard";
import { useAppSelector } from "../../../store";

interface Props {
  users: UserType[];
  renderUser: (user: UserType) => ReactNode;
}

const UsersList: FC<Props> = ({ users, renderUser }) => {
  return (
    <Grid container sx={{ width: "100%" }}>
      <List data={users} renderItem={renderUser} />
    </Grid>
  );
};

export default UsersList;
