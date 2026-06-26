import styled from 'styled-components';

export const Cabecalho = styled.header`
    background-color: #3b0764;
    display: flex;
    align-items: center;
    padding: 10px 20px;
`;

export const TituloHeader = styled.h1`
   font-size: 25px;
   color: white;
`;

export const NavList = styled.ul`
    list-style: none;
    display: flex;   
    margin-left: 450px;
`;

export const NavItem = styled.li`
    margin-left: 20px;

    a {
        text-decoration: none;
        color: white;
    }
`;