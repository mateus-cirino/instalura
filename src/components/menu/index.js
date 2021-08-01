import Logo from "../../logo";
import MenuWrapper from "./style";
import Button from "../button/style";

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

const Menu = () => {
    return (
        <MenuWrapper>
            <MenuWrapper.LeftSide>
                <Logo/>
            </MenuWrapper.LeftSide>
            <MenuWrapper.CentralSide>
                {links.map((link) => <li key={link.url}><a href={link.url}>{link.nome}</a></li>)}
            </MenuWrapper.CentralSide>
            <MenuWrapper.RightSide>
            <Button type="button" ghost variant="secondary.main">Entrar</Button>
            <Button type="button" variant="primary.main">Cadastrar</Button>
            </MenuWrapper.RightSide>
        </MenuWrapper>
    )
};

export default Menu;