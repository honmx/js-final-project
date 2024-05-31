import { Box } from "@mui/material";
import { FC, PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  renderHeader?: () => ReactNode;
  renderFooter?: () => ReactNode;
}

const Layout: FC<Props> = ({ renderHeader, renderFooter, children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>{renderHeader?.()}</Box>
      <Box sx={{ flex: 1 }}>{children}</Box>
      <Box>{renderFooter?.()}</Box>
    </Box>
  );
};

export default Layout;
