import styled from 'styled-components';

export const Container = styled.div`
    background-color: #6B21A8;
    min-height: 100vh;
    color: white;
    padding: 50px;
    display: flex;
    justify-content: center;
`;

export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    max-width: 1100px;
`;

export const Paragrafo = styled.p`
    font-size: 18px;
    text-align: justify;
    line-height: 1.6;
    margin-right: 50px;
`;

export const Imagem = styled.img`
    width: 450px;
    height: 300px;
    border-radius: 20px;
    object-fit: cover;
`;