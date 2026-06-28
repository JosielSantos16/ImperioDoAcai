import {
  SectionTitle,
  SectionDivider,
  MovimentacoesTable,
  TableRow,
  TableHeader,
  TableCell,
  StatusBadge,
} from "./movStyles";

const movimentacoes = [
  { lote: "#034", produtor: "João Pereira",    municipio: "Santarém",   qtd: "320 kg", data: "10/06/2025", status: "Entregue" },
  { lote: "#035", produtor: "Maria Souza",     municipio: "Óbidos",     qtd: "210 kg", data: "10/06/2025", status: "Pendente" },
  { lote: "#033", produtor: "Raimundo Costa",  municipio: "Oriximiná",  qtd: "450 kg", data: "08/06/2025", status: "Entregue" },
  { lote: "#032", produtor: "Ana Ferreira",    municipio: "Juruti",     qtd: "180 kg", data: "07/06/2025", status: "Pendente" },
  { lote: "#031", produtor: "Antônio Lima",    municipio: "Santarém",   qtd: "390 kg", data: "06/06/2025", status: "Entregue" },
  { lote: "#030", produtor: "Francisca Neves", municipio: "Alenquer",   qtd: "270 kg", data: "05/06/2025", status: "Entregue" },
];

export default function Movimentacoes() {
  return (
    <>
      <SectionTitle>Últimas Movimentações</SectionTitle>
      <SectionDivider />

      <MovimentacoesTable>
        <thead>
          <TableRow>
            {[
              "Lote",
              "Produtor",
              "Município",
              "Quantidade",
              "Data",
              "Status",
            ].map((h) => (
              <TableHeader key={h}>{h}</TableHeader>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {movimentacoes.map((m, i) => (
            <TableRow key={m.lote} $striped={i % 2 === 0}>
              <TableCell>{m.lote}</TableCell>
              <TableCell>{m.produtor}</TableCell>
              <TableCell>{m.municipio}</TableCell>
              <TableCell>{m.qtd}</TableCell>
              <TableCell>{m.data}</TableCell>
              <TableCell>
                <StatusBadge $status={m.status}>
                  {m.status === "Entregue" ? "✔ Entregue" : "⏳ Pendente"}
                </StatusBadge>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </MovimentacoesTable>
    </>
  );
}
