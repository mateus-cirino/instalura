import logoProjeto from "../../../public/pictures/logo-projeto.svg";
import MenuWrapper from "./style";
import Button from "../button/style";
import Image from "next/image";
import Text from "../text/style";

const links = [
  {
    nome: "Home",
    url: "/",
  },
  {
    nome: "Perguntas Frequentes",
    url: "/faq",
  },
  {
    nome: "Sobre",
    url: "/sobre",
  },
];

const Menu = () => {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Image src={logoProjeto} alt="Logo Instalura" />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link) => (
          <Text key={link.url} as="li" typographyVariant="paragraph1">
            <a href={link.url}>{link.nome}</a>
          </Text>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button
          type="button"
          ghost={true}
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
};

export default Menu;
