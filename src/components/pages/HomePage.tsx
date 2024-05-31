import { FC } from "react";
import { Footer, Header, Layout } from "../organisms/layout";
import PageWrapper from "../atoms/PageWrapper";
import HomePageView from "../views/HomePageView";
import { useCheckAuth } from "../../hooks/useCheckAuth";

interface Props {}

const HomePage: FC<Props> = ({}) => {
  useCheckAuth();

  return (
    <Layout renderHeader={() => <Header />} renderFooter={() => <Footer />}>
      <PageWrapper>
        <HomePageView />
      </PageWrapper>
    </Layout>
  );
};

export default HomePage;
