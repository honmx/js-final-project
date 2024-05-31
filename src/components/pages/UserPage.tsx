import { FC } from "react";
import { Footer, Header, Layout } from "../organisms/layout";
import PageWrapper from "../atoms/PageWrapper";
import HomePageView from "../views/HomePageView";
import { useCheckAuth } from "../../hooks/useCheckAuth";
import UserPageView from "../views/UserPageView";
import { useParams, useSearchParams } from "react-router-dom";
import { useGetUserQuery } from "../../services";

interface Props {}

const UserPage: FC<Props> = ({}) => {
  useCheckAuth();

  return (
    <Layout renderHeader={() => <Header />} renderFooter={() => <Footer />}>
      <PageWrapper>
        <UserPageView />
      </PageWrapper>
    </Layout>
  );
};

export default UserPage;
