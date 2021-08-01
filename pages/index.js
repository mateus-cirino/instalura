import Menu from "../src/components/menu";
import Head from "next/head";
import { PageContent, PageWrapper } from "../src/components/pageWrapper/style";
import Footer from "../src/components/footer";

const Home = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <title>Instalura</title>
      </Head>
      <PageWrapper>
        <PageContent>
          <Menu />
        </PageContent>
        <Footer/>
      </PageWrapper>
    </>
  );
};

export default Home;
