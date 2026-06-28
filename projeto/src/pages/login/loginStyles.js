import styled from "styled-components";

export const Div = styled.div`
  background: #f8fafc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  min-height: 100vh;
`;

export const Header = styled.header`
  margin-bottom: 20px;
`;

export const Titulo = styled.h1`
  color: #3b0764;
  text-align: center;
  font-size: 2.5rem; 
`;

export const Formulario = styled.form`
  width: 100%;
  max-width: 450px; 
`;

export const ConjutoDeCampo = styled.fieldset`
  border: 1px solid #cbd5e1;
  border-radius: 12px; 
  padding: 40px;      
  background: #fff;
`;

export const RotuloEmail = styled.label`
  display: block;
  color: #5b21b6;
  font-weight: 600;
  margin-bottom: 8px; 
  font-size: 1rem;  
`;

export const InputEmail = styled.input`
  width: 100%;
  padding: 14px;     
  margin-bottom: 16px;
  border: 1.5px solid #cbd5e1;
  border-radius: 8px;
  font-size: 1rem;
`;

export const RotuloSenha = styled.label`
  display: block;
  color: #5b21b6;
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 1rem;
`;

export const InputSenha = styled.input`
  width: 100%;
  padding: 14px;
  margin-bottom: 20px;
  border: 1.5px solid #cbd5e1;
  border-radius: 8px;
  font-size: 1rem;
`;

export const Botao = styled.button`
  width: 100%;
  padding: 16px;     
  background: #6b21a8;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem; 
`;