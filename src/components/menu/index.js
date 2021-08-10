import React from 'react';
import Image from 'next/image';
import logoProjeto from '../../../public/pictures/logo-projeto.svg';
import MenuWrapper from './style';
import Button from '../button/style';
import Text from '../text/style';

const links = [
  {
    nome: 'Home',
    url: '/',
  },
  {
    nome: 'Perguntas Frequentes',
    url: '/faq',
  },
  {
    nome: 'Sobre',
    url: '/sobre',
  },
];

const Menu = () => (
  <MenuWrapper>
    <MenuWrapper.LeftSide>
      <Image src={logoProjeto} alt="Logo Instalura" />
    </MenuWrapper.LeftSide>
    <MenuWrapper.CentralSide>
      {links.map((link) => (
        <Text key={link.url} as="li" typographyVariant="paragraph2">
          <a href={link.url}>{link.nome}</a>
        </Text>
      ))}
    </MenuWrapper.CentralSide>
    <MenuWrapper.RightSide>
      <Button
        type="button"
        ghost
        typographyVariant="paragraph2"
        colorVariant="secondary.main"
      >
        Entrar
      </Button>
      <Button type="button" typographyVariant="paragraph2" colorVariant="primary.main">
        Cadastrar
      </Button>
    </MenuWrapper.RightSide>
  </MenuWrapper>
);

export default Menu;
