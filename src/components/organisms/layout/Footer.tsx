import { FC } from "react";
import { Box, Typography } from "@mui/material";

interface Props {}

const Footer: FC<Props> = ({}) => {
  return (
    <Box sx={{ padding: 2, backgroundColor: "#BBB" }}>
      <Typography sx={{ fontSize: 30, fontWeight: 600, color: "#444" }}>
        Footer
      </Typography>
    </Box>
  );
};

export default Footer;
