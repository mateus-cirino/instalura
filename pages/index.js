import Menu from "../src/components/menu";
import Head from "next/head";
import { PageContent, PageWrapper } from "../src/components/page/style";
import Footer from "../src/components/footer";
import Text from "../src/components/text/style";
import Button from "../src/components/button/style";
import { Grid } from "../src/components/grid/style";

const Home = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={true}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <title>Instalura</title>
      </Head>
      <PageWrapper>
        <PageContent>
          <Menu />
          <Grid.Container>
            <Grid.Row>
              <Grid.Col colSize={{ xs: 12, md: 4 }} offSet={1}>
                <Text
                  as="h1"
                  typographyVariant="title"
                  colorVariant="tertiary.main"
                  textAlign={{
                    xs: "center",
                    md: "left",
                  }}
                >
                  Compartilhe momentos e conecte-se com amigos
                </Text>
                <Text
                  as="p"
                  typographyVariant="paragraph1"
                  colorVariant="tertiary.light"
                  textAlign={{
                    xs: "center",
                    md: "left",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s.
                </Text>

                <Button
                  typographyVariant="paragraph1"
                  colorVariant="primary.main"
                  margin={{
                    xs: "auto",
                    md: "initial",
                  }}
                  display="block"
                >
                  Cadastrar
                </Button>
              </Grid.Col>
              <Grid.Col colSize={{ xs: 12, md: 6 }}>
                <img
                  style={{ display: "block", margin: "auto" }}
                  src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
                />
              </Grid.Col>
            </Grid.Row>
          </Grid.Container>
        </PageContent>
        <Footer />
      </PageWrapper>
    </>
  );
};

export default Home;
