import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import logoProjeto from '../../../public/pictures/logo-projeto.svg';
import MenuWrapperStyled from './style';
import Button from '../button/style';
import TextStyled from '../text/style';

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

const Menu = ({ onClickButtonCadastrar }) => (
  <MenuWrapperStyled>
    <MenuWrapperStyled.LeftSideStyled>
      <Image src={logoProjeto} alt="Logo Instalura" />
    </MenuWrapperStyled.LeftSideStyled>
    <MenuWrapperStyled.CentralSideStyled>
      {links.map((link) => (
        <TextStyled
          key={link.url}
          as="li"
          typographyVariant={{
            xs: 'smallestException',
            md: 'paragraph2',
          }}
        >
          <a href={link.url}>{link.nome}</a>
        </TextStyled>
      ))}
    </MenuWrapperStyled.CentralSideStyled>
    <MenuWrapperStyled.RightSideStyled>
      <Button
        type="button"
        ghost
        typographyVariant={{
          xs: 'smallestException',
          md: 'paragraph2',
        }}
        colorVariant="secondary.main"
      >
        Entrar
      </Button>
      <Button
        type="button"
        typographyVariant={{
          xs: 'smallestException',
          md: 'paragraph2',
        }}
        colorVariant="primary.main"
        onClick={onClickButtonCadastrar}
      >
        Cadastrar
      </Button>
    </MenuWrapperStyled.RightSideStyled>
  </MenuWrapperStyled>
);

Menu.propTypes = {
  onClickButtonCadastrar: PropTypes.func.isRequired,
};

export default Menu;
