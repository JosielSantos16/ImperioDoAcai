import Acai from '../../assets/acai.png';
import { Container, ContentWrapper, Paragrafo, Imagem } from './homeStyles';
import Header from '../../components/header/Header';

export default function Home() {
    return (
        <>
            <Header />
            <Container>
                <ContentWrapper>
                    <section>
                        <h1 style={{ fontSize: '35px' }}>🫐 Império do Açaí</h1>
                        <Paragrafo>
                            Bem-vindo à nossa Distribuidora de Açaí!
                            Oferecemos uma plataforma que facilita o controle de pedidos, estoque e entregas, 
                            tornando a distribuição de açaí mais rápida, organizada e eficiente. 
                            Nosso objetivo é reduzir erros, evitar perdas e garantir mais praticidade para o seu negócio.
                            Atendemos distribuidores, produtores de açaí, açaiterias e empreendedores do setor alimentício, 
                            sempre valorizando as riquezas da Amazônia Paraense, origem de um dos frutos mais tradicionais e apreciados do Brasil.
                        </Paragrafo>
                    </section>
                    <Imagem src={Acai} alt="Açaí" />
                </ContentWrapper>
            </Container>
        </>
    );
}