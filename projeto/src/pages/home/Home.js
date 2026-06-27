import Acai from '../../assets/acai.png';
import { Container, ContentWrapper, Paragrafo, Imagem } from './homeStyles';
import Header from '../../components/header/Header';

export default function Home() {
    return (
        <>
            <Header />
            <Container>
                <ContentWrapper>
                    <section style={{ flex: 1 }}>
                        <h1 style={{ fontSize: '75px', margin: 0 }}>🫐 Império do Açaí</h1>
                        <Paragrafo>
                            Bem-vindo à nossa Distribuidora de Açaí!
                            Oferecemos uma plataforma que facilita o controle de pedidos, estoque e entregas, 
                            tornando a distribuição de açaí mais rápida, organizada e eficiente. 
                            Nosso objetivo é reduzir erros, evitar perdas e garantir mais praticidade para o seu negócio.
                        </Paragrafo>
                    </section>
                    <Imagem src={Acai} alt="Açaí" />
                </ContentWrapper>
            </Container>
        </>
    );
}