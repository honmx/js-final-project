import { FC } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

interface Props {}

const Header: FC<Props> = ({}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#BBB",
        padding: "10px 20px",
      }}
    >
      <Typography sx={{ fontSize: 30, fontWeight: 600, color: "#444" }}>
        Header
      </Typography>
    </Box>
  );
};

export default Header;
