import styled from 'styled-components';

export const Container = styled.div`
    background-color: #6B21A8;
    min-height: 90.5vh;
    color: white;
    padding: 60px 80px; 
    display: flex;
    justify-content: center;
`;

export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1300px; 
    gap: 80px;
`;

export const Paragrafo = styled.p`
    font-size: 24px;
    text-align: justify;
    line-height: 1.8;
    margin-top: 30px;
`;

export const Imagem = styled.img`
    width: 550px; 
    height: 380px; 
    border-radius: 20px;
    object-fit: cover;
    flex-shrink: 0; 
`;