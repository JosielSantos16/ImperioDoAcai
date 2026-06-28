import styled from "styled-components";

export const SectionTitle = styled.h1`
  font-size: 1.25rem;
  color: #3b0764;
  margin: 32px 0 12px 2%;
  font-weight: 700;
`;

export const MovimentacoesTable = styled.table`
  width: 96%;
  margin: 0 auto 40px;
  border-collapse: collapse;
  border: 1px solid #ddd;
`;

export const TableHead = styled.thead``;

export const TableRow = styled.tr`
  background-color: ${({ $striped }) => ($striped ? "#faf5ff" : "white")};

  &:is(thead tr) {
    background-color: #6b21a8;
  }
`;

export const TableHeader = styled.th`
  background-color: #6b21a8;
  color: white;
  font-weight: bold;
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
`;

export const TableCell = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
  font-size: 0.9rem;
`;

export const StatusBadge = styled.span`
  font-weight: bold;
  color: ${({ $status }) => ($status === "Entregue" ? "green" : "orange")};
`;

export const SectionDivider = styled.hr`
  border: none;
  border-top: 2px solid #6b21a8;
  margin: 0 2% 24px;
`;