import { FC } from "react";
import { UserType } from "../../../types/UserType";
import { Box, BoxProps, PaperProps, Typography } from "@mui/material";
import Card from "../../atoms/Card";

interface Props extends PaperProps {
  user: UserType;
}

const UserCard: FC<Props> = ({ user, sx, ...props }) => {
  return (
    <Card sx={{ overflow: "hidden", ...sx }} {...props}>
      <img src={user.avatar} style={{ aspectRatio: 1, width: "100%" }} />
      <Box sx={{ padding: 1 }}>
        <Typography>
          {user.first_name} {user.last_name}
        </Typography>
        <Typography sx={{ fontSize: 12 }}>{user.email}</Typography>
      </Box>
    </Card>
  );
};

export default UserCard;
