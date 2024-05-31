import { FC, useCallback, useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Grid,
  Pagination,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useGetUsersQuery } from "../../services";
import { useAppDispatch, useAppSelector } from "../../store";
import { setPage } from "../../store/slices/usersSlice";
import {
  UserCard,
  UserFilters,
  UserPagination,
  UsersList,
  getUsersFilteredById,
  getUsersFilteredByNameOrEmail,
} from "../organisms/user";
import { UserType } from "../../types/UserType";
import { useNavigate } from "react-router-dom";

interface Props {}

const HomePageView: FC<Props> = ({}) => {
  const [value, setValue] = useState<string>("");

  const navigate = useNavigate();

  const page = useAppSelector((state) => state.users.page);
  const activeFitler = useAppSelector((state) => state.users.filter);

  const { data, isLoading, isFetching } = useGetUsersQuery({ page });

  const renderUser = useCallback(
    (user: UserType) => (
      <Grid key={user.id} item xs={4}>
        <UserCard
          user={user}
          onClick={() => navigate(`/user?id=${user.id}`)}
          sx={{ margin: 1, "&:hover": { cursor: "pointer" } }}
        />
      </Grid>
    ),
    []
  );

  if (isLoading || isFetching) {
    return <CircularProgress />;
  }

  if (!data?.data) {
    return <Typography>No data</Typography>;
  }

  return (
    <Box sx={{ marginTop: 3, marginBottom: 3 }}>
      <Stack>
        <TextField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant="outlined"
          size="small"
        />
        <UserFilters />
      </Stack>
      <Box>
        <UsersList
          users={getUsersFilteredById(
            getUsersFilteredByNameOrEmail(data.data, value),
            activeFitler
          )}
          renderUser={renderUser}
        />
      </Box>
      <UserPagination />
    </Box>
  );
};

export default HomePageView;
