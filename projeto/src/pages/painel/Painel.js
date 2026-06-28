import Header from "../../components/header/Header"
import Banner from "../../components/painel/banner/Banner";
import Indicadores from "../../components/painel/indicadores/Indicadores"
import Movimentacoes from "../../components/painel/movimentacoes/Movimentacoes";
import Regioes from "../../components/painel/regioes/Regioes";
import Footer from "../../components/footer/Footer"
import {
  PageWrapper
} from "./painelStyles";

export default function Painel() {
  return (
    <PageWrapper>
      <Header/>
      <Banner/>
      <Indicadores/>
      <Regioes/>
      <Movimentacoes/>
      <Footer/>
    </PageWrapper>
  );
}