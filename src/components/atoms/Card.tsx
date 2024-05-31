import { Paper, PaperProps } from "@mui/material";
import { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren, PaperProps {}

const Card: FC<Props> = ({ children, ...props }) => {
  return (
    <Paper elevation={8} {...props}>
      {children}
    </Paper>
  );
};

export default Card;
