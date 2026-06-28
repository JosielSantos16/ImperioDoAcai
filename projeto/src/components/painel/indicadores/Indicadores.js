import {
  SectionTitle,
  CardsGrid,
  Card,
  CardHeader,
  CardValue,
  CardLabel,
  CardDescription,
} from "./indStyles";

const indicadores = [
  {
    icon: "👨‍🌾",
    title: "Produtores",
    value: "148",
    label: "produtores ativos",
    desc: "Cadastrados e com pelo menos um lote registrado nos últimos 30 dias na plataforma.",
  },
  {
    icon: "📦",
    title: "Lotes Registrados",
    value: "312",
    label: "lotes no mês",
    desc: "Total de lotes de açaí registrados e rastreados pelo sistema no período atual.",
  },
  {
    icon: "⚖️",
    title: "Total Produzido",
    value: "9,4t",
    label: "toneladas em junho",
    desc: "Volume total de açaí coletado e registrado pelos produtores na região amazônica.",
  },
  {
    icon: "💰",
    title: "Receita Estimada",
    value: "R$87k",
    label: "valor estimado",
    desc: "Estimativa de receita com base nos lotes entregues e preço médio de mercado do açaí.",
  },
];

export default function Indicadores() {
  return (
    <>
      <SectionTitle>Indicadores do Mês — Junho 2025</SectionTitle>

      <CardsGrid>
        {indicadores.map((ind) => (
          <Card key={ind.title}>
            <CardHeader>
              {ind.icon} {ind.title}
            </CardHeader>
            <CardValue>{ind.value}</CardValue>
            <CardLabel>{ind.label}</CardLabel>
            <CardDescription>{ind.desc}</CardDescription>
          </Card>
        ))}
      </CardsGrid>
    </>
  );
}
