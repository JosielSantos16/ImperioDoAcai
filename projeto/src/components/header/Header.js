import { Link } from 'react-router-dom';
import { Cabecalho, TituloHeader, NavList, NavItem } from './headerStyles';

export default function Header() {
    return (
        <Cabecalho>
            <TituloHeader id="titulo">🫐 Império do Açaí</TituloHeader>
            <nav>
                <NavList>
                    <NavItem><Link to="/">Início</Link></NavItem>
                    <NavItem><Link to="/painel">Painel</Link></NavItem>
                    <NavItem><Link to="/cadastro">Cadastro</Link></NavItem>
                    <NavItem><Link to="/relatorio">Relatório</Link></NavItem>
                    <NavItem><Link to="/login">Sair</Link></NavItem>
                </NavList>
            </nav>
        </Cabecalho>
    );
}