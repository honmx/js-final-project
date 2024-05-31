import { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import PageWrapper from "../atoms/PageWrapper";
import { Footer, Header, Layout } from "../organisms/layout";
import { useNavigate } from "react-router-dom";

interface Props {}

const ErrorPage: FC<Props> = ({}) => {
  const navigate = useNavigate();

  const handleGoBackClick = () => {
    navigate(-1);
  };

  return (
    <Layout renderHeader={() => <Header />} renderFooter={() => <Footer />}>
      <PageWrapper
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: 160, fontWeight: 700, color: "#999" }}>
          404
        </Typography>
        <Button variant="contained" size="large" onClick={handleGoBackClick}>
          Back
        </Button>
      </PageWrapper>
    </Layout>
  );
};

export default ErrorPage;
