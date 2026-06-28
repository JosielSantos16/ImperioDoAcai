import Arvore from "../../../assets/acaizeiro.jpg"
import {
  HeroBanner,
  HeroText,
  HeroTitle,
  HeroDescription,
  HeroImage,
} from "./bannerStyles";

export default function Banner() {
  return (
    <>
      <HeroBanner>
        <HeroText>
          <HeroTitle>Painel de Controle</HeroTitle>
          <HeroDescription>
            Bem-vindo ao Império do Açaí da Amazônia. Aqui você acompanha em
            tempo real a produção, os lotes cadastrados e as movimentações dos
            produtores da região do Baixo Amazonas. Use o menu acima para
            navegar entre as funcionalidades do sistema.
          </HeroDescription>
        </HeroText>
        <HeroImage src={Arvore} alt="Frutos de açaí" />
      </HeroBanner>
    </>
  );
}
