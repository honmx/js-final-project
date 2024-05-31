import { FC } from "react";
import { Box, Pagination } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setPage } from "../../../store/slices/usersSlice";
import { getUsersFilteredByNameOrEmail } from "./helpers/getUsersFilteredByNameOrEmail";

interface Props {}

const UserPagination: FC<Props> = ({}) => {
  const dispatch = useAppDispatch();

  const currentPage = useAppSelector((state) => state.users.page);
  const pagesCount = useAppSelector((state) => state.users.total_pages);

  const handlePageChange = (e: unknown, page: number) => {
    dispatch(setPage(page));
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Pagination
        count={pagesCount}
        page={currentPage}
        onChange={handlePageChange}
      />
    </Box>
  );
};

export default UserPagination;
