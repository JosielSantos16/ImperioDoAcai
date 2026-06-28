import styled from "styled-components";

export const SectionTitle = styled.h1`
  font-size: 1.25rem;
  color: #3b0764;
  margin: 32px 0 12px 2%;
  font-weight: 700;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  padding: 0 2% 32px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background-color: #f3e8ff;
  border: 1px solid #c084fc;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardHeader = styled.div`
  background-color: #6b21a8;
  color: white;
  font-weight: bold;
  width: 100%;
  text-align: center;
  padding: 12px 16px;
  box-sizing: border-box;
`;

export const CardValue = styled.div`
  color: #3b0764;
  font-size: 3rem;
  font-weight: bold;
  margin-top: 16px;
`;

export const CardLabel = styled.div`
  color: #6b21a8;
  font-size: 0.85rem;
  margin-bottom: 8px;
`;

export const CardDescription = styled.div`
  color: #555555;
  font-size: 0.8rem;
  text-align: center;
  padding: 0 16px 20px;
  line-height: 1.5;
`;