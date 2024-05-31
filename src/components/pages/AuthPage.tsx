import { FC } from "react";
import { Footer, Header, Layout } from "../organisms/layout";
import PageWrapper from "../atoms/PageWrapper";
import AuthPageView from "../views/AuthPageView";

interface Props {}

const AuthPage: FC<Props> = ({}) => {
  return (
    <Layout renderHeader={() => <Header />} renderFooter={() => <Footer />}>
      <PageWrapper>
        <AuthPageView />
      </PageWrapper>
    </Layout>
  );
};

export default AuthPage;
