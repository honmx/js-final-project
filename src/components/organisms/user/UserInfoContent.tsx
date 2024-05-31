import { Box, IconButton, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { UserType } from "../../../types/UserType";
import EditIcon from "@mui/icons-material/Edit";

interface Props {
  user: UserType;
  handleEditInfo: () => void;
}

const UserInfoContent: FC<Props> = ({ user, handleEditInfo }) => {
  return (
    <Stack direction="row" sx={{ justifyContent: "space-between" }}>
      <Stack direction="row" spacing={3}>
        <img src={user.avatar} />
        <Box>
          <Typography>{user.first_name}</Typography>
          <Typography>{user.last_name}</Typography>
          <Typography fontSize={12}>{user.email}</Typography>
        </Box>
      </Stack>
      <Box>
        <IconButton onClick={handleEditInfo}>
          <EditIcon />
        </IconButton>
      </Box>
    </Stack>
  );
};

export default UserInfoContent;
