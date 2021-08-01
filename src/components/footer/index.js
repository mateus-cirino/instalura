import FooterWrapper from "./style";
import Image from "next/image";
import aluraLogo from "../../../public/pictures/alura-logo.svg"
import ImagemWrapper from "../imagem/style";

const Footer = () => {
    return (
      <FooterWrapper>
        <a href="https://www.alura.com.br/">
          <ImagemWrapper marginRight={20}>
            <Image src={aluraLogo} alt="Logo Alura" />
          </ImagemWrapper>
        </a>
        <p>
          Orgulhosamente criado durante
          {' '}
          o
          {' '}
          <a href="https://www.alura.com.br/">
            <span>Bootcamp Alura JAM Stack</span>
          </a>
        </p>
      </FooterWrapper>
    );
  }

export default Footer;