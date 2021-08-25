import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Menu from '../src/components/menu';
import Footer from '../src/components/footer';
import TextStyled from '../src/components/text/style';
import ButtonStyled from '../src/components/button/style';
import Grid from '../src/components/grid/style';
import instaluraHome from '../public/pictures/instalura-home.png';
import BoxStyled from '../src/components/box/style';
import Modal from '../src/components/modal';
import Form from '../src/components/form';

const Home = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <BoxStyled
        flex="1"
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="space-between"
        backgroundImage="url(/pictures/bubbles.svg)"
        backgroundRepeat="no-repeat"
        backgroundPosition="bottom right"
      >
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <title>Instalura</title>
        </Head>
        <Modal isOpen={modal} onClose={() => setModal(false)}>
          {
            (propsDoModal) => (
              <BoxStyled
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...propsDoModal}
                width={{
                  xs: '100%',
                  md: '35%',
                }}
                marginLeft="auto"
                backgroundColor="#FFFFFF"
              >
                { propsDoModal.CloseButton }
                <Form />
              </BoxStyled>
            )
          }
        </Modal>
        <Menu />
        <Grid.ContainerStyled>
          <Grid.RowStyled>
            <Grid.ColStyled colSize={{ xs: 12, md: 5 }} offSet={{ md: 1 }}>
              <TextStyled
                as="h1"
                typographyVariant="title"
                colorVariant="tertiary.main"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                Compartilhe momentos e conecte-se com amigos
              </TextStyled>
              <TextStyled
                as="p"
                typographyVariant="paragraph1"
                colorVariant="tertiary.light"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s.
              </TextStyled>

              <ButtonStyled
                typographyVariant="paragraph1"
                colorVariant="primary.main"
                margin={{
                  xs: 'auto',
                  md: 'initial',
                }}
                display="block"
                onClick={() => setModal(true)}
              >
                Cadastrar
              </ButtonStyled>
            </Grid.ColStyled>
            <Grid.ColStyled colSize={{ xs: 12, md: 6 }}>
              <Image
                src={instaluraHome}
                alt="Imagem contendo a interface do aplicativo Instalura exibindo o perfil do Nicolas Cage"
              />
            </Grid.ColStyled>
          </Grid.RowStyled>
        </Grid.ContainerStyled>
        <Footer />
      </BoxStyled>
    </>
  );
};

export default Home;
