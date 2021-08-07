import FooterWrapper from "./style";
import Image from "next/image";
import aluraLogo from "../../../public/pictures/alura-logo.svg";
import ImagemWrapper from "../imagem/style";
import Text from "../text/style";

const Footer = () => {
  return (
    <FooterWrapper>
      <Text
        as="a"
        href="https://www.alura.com.br/"
        typographyVariant="paragraph1"
      >
        <ImagemWrapper marginRight={"20px"}>
          <Image src={aluraLogo} alt="Logo Alura" />
        </ImagemWrapper>
      </Text>
      <Text as="p" typographyVariant="paragraph1">
        Orgulhosamente criado durante o{" "}
        <Text
          as="a"
          href="https://www.alura.com.br/"
          typographyVariant="paragraph1"
        >
          Bootcamp Alura JAM Stack
        </Text>
      </Text>
    </FooterWrapper>
  );
};

export default Footer;
