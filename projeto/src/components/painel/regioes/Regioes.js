import Floresta from "../../../assets/floresta.jpg"
import Producao from "../../../assets/producao.jpg"
import Cestos from "../../../assets/cestos.jpg"
import {
  SectionTitle,
  RegionsGrid,
  RegionCard,
  RegionImg,
  RegionName,
  RegionDesc,
  SectionDivider,
} from "./regioesStyles";

const regioes = [
  {
    src: Floresta,
    alt: "Floresta Amazônica",
    name: "Baixo Amazonas",
    desc: "Principal região produtora de açaí atendida pelo AçaíLink, com comunidades ribeirinhas e produtores familiares cadastrados.",
  },
  {
    src: Producao,
    alt: "Região do Pará",
    name: "Região de Santarém",
    desc: "Área de expansão do sistema, integrando novos produtores e cooperativas do município de Santarém e arredores.",
  },
  {
    src: Cestos,
    alt: "Produção de Açaí",
    name: "Produção Local",
    desc: "Acompanhamento direto da coleta ao transporte, garantindo rastreabilidade e qualidade dos frutos registrados na plataforma.",
  },
];

export default function Regioes() {
  return (
    <>
      <SectionTitle>Regiões Atendidas pelo Sistema</SectionTitle>
      <SectionDivider />

      <RegionsGrid>
        {regioes.map((r) => (
          <RegionCard key={r.name}>
            <RegionImg src={r.src} alt={r.alt} />
            <RegionName>{r.name}</RegionName>
            <RegionDesc>{r.desc}</RegionDesc>
          </RegionCard>
        ))}
      </RegionsGrid>
    </>
  );
}
