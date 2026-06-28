import styled from "styled-components";

export const HeroBanner = styled.section`
  background-color: #6b21a8;
  display: flex;
  align-items: center;
  padding: 28px 32px;
  gap: 32px;
`;

export const HeroText = styled.div`
  flex: 1;
`;

export const HeroTitle = styled.h2`
  color: white;
  font-size: 2rem;
  margin: 0 0 16px;
`;

export const HeroDescription = styled.p`
  color: #e9d5ff;
  font-size: 1rem;
  line-height: 1.6;
  text-align: justify;
  margin: 0;
`;

export const HeroImage = styled.img`
  width: 400px;
  height: 250px;
  object-fit: cover;
  border-radius: 20px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;