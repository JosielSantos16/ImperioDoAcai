import styled from 'styled-components';

export const Cabecalho = styled.header`
    background-color: #3b0764;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    padding: 30px 40px;
`;

export const TituloHeader = styled.h1`
   font-size: 25px;
   color: white;
   margin: 0;
   white-space: nowrap; 
`;

export const NavList = styled.ul`
    list-style: none;
    display: flex;   
    margin: 0; 
    padding: 0;
`;

export const NavItem = styled.li`
    margin-left: 25px;
    font-size: 25px; 
    margin-left: 40px;

    a {
        text-decoration: none;
        color: white;
    }
`;