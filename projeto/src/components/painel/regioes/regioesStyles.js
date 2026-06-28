import styled from "styled-components";

export const SectionTitle = styled.h1`
  font-size: 1.25rem;
  color: #3b0764;
  margin: 32px 0 12px 2%;
  font-weight: 700;
`;

export const RegionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  padding: 0 2% 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const RegionCard = styled.div`
  background-color: #faf5ff;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const RegionImg = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 20px;
`;

export const RegionName = styled.div`
  color: #3b0764;
  font-size: 1rem;
  font-weight: bold;
`;

export const RegionDesc = styled.div`
  color: #555555;
  font-size: 0.85rem;
  text-align: center;
  line-height: 1.5;
`;

export const SectionDivider = styled.hr`
  border: none;
  border-top: 2px solid #6b21a8;
  margin: 0 2% 24px;
`;