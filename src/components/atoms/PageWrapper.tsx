import {
  AppBar,
  Box,
  BoxProps,
  Container,
  ContainerProps,
  Typography,
} from "@mui/material";
import { FC } from "react";

interface Props extends ContainerProps {}

const PageWrapper: FC<Props> = ({ sx, children, ...props }) => {
  return (
    <Container maxWidth="sm" sx={{ flex: 1, ...sx }} {...props}>
      {children}
    </Container>
  );
};

export default PageWrapper;
