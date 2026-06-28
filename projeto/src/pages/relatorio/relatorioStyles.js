import styled from "styled-components";

export const Container = styled.div`
  background: #f8fafc;
  min-height: 100vh;
  padding-bottom: 40px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  background: #fff;
  border-bottom: 1px solid #cbd5e1;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled.a`
  color: #5b21b6;
  text-decoration: none;
  font-weight: 600;
`;

export const Cabeca = styled.header`
  text-align: center;
  padding: 30px 20px;
`;

export const Titulo = styled.h1`
  color: #3b0764;
  font-size: 2.5rem;
`;

export const Descricao = styled.p`
  color: #475569;
  max-width: 700px;
  margin: 12px auto 0;
`;

export const Filtros = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  padding: 20px;
  max-width: 900px;
  margin: 0 auto 30px;
`;

export const BotaoFiltrar = styled.input`
  background: #6b21a8;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-weight: 600;
  cursor: pointer;
`;

export const Main = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Subtitulo = styled.h2`
  color: #3b0764;
  margin-top: 30px;
  margin-bottom: 12px;
`;

export const Tabela = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;

  th, td {
    padding: 12px;
    border: 1px solid #cbd5e1;
    text-align: left;
  }

  th {
    background: #f3e8ff;
    color: #5b21b6;
  }

  .total {
    background: #ede9fe;
    font-weight: 600;
  }

  .entregue {
    color: #15803d;
    font-weight: 600;
  }

  .pendente {
    color: #b45309;
    font-weight: 600;
  }
`;
