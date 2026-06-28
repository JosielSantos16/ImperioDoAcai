import {
  Container,
  Cabeca,
  Titulo,
  Descricao,
  Filtros,
  BotaoFiltrar,
  Main,
  Subtitulo,
  Tabela,
  Footer,
} from "./relatorioStyles";
import Header from "../../components/header/Header";

export default function Relatorio() {
  return (
    <Container>
      <Header/>

      <Cabeca>
        <Titulo>Relatórios</Titulo>
        <Descricao>
          Visualize e acompanhe todos os registros de produção de açaí cadastrados na plataforma.
          Os dados são organizados por município, produtor e período, permitindo o monitoramento
          completo dos lotes desde a coleta até a entrega.
        </Descricao>
      </Cabeca>

      <Filtros>
        <label>
          Período: <input type="text" defaultValue="01/06/2025" size="10" /> até{" "}
          <input type="text" defaultValue="30/06/2025" size="10" />
        </label>

        <label>
          Município:
          <select>
            <option>Todos</option>
            <option>Santarém</option>
            <option>Óbidos</option>
            <option>Oriximiná</option>
            <option>Juruti</option>
            <option>Alenquer</option>
          </select>
        </label>

        <label>
          Status:
          <select>
            <option>Todos</option>
            <option>Entregue</option>
            <option>Pendente</option>
          </select>
        </label>

        <BotaoFiltrar type="button" value="🔍 Filtrar" />
      </Filtros>

      <Main>
        <Subtitulo>Produção por Município — Junho 2025</Subtitulo>
        <Tabela>
          <thead>
            <tr>
              <th>Município</th>
              <th>Nº de Produtores</th>
              <th>Lotes Registrados</th>
              <th>Volume Total (kg)</th>
              <th>Receita Total (R$)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Santarém</td><td>52</td><td>98</td><td>3.120</td><td>R$ 12.480,00</td></tr>
            <tr><td>Óbidos</td><td>31</td><td>64</td><td>2.050</td><td>R$ 8.200,00</td></tr>
            <tr><td>Oriximiná</td><td>28</td><td>57</td><td>1.840</td><td>R$ 7.360,00</td></tr>
            <tr><td>Juruti</td><td>19</td><td>42</td><td>1.300</td><td>R$ 5.200,00</td></tr>
            <tr><td>Alenquer</td><td>18</td><td>51</td><td>1.090</td><td>R$ 4.360,00</td></tr>
            <tr className="total">
              <td><b>Total Geral</b></td><td>148</td><td>312</td><td>9.400</td><td>R$ 37.600,00</td>
            </tr>
          </tbody>
        </Tabela>

        <Subtitulo>Detalhamento de Lotes Registrados</Subtitulo>
        <Tabela>
          <thead>
            <tr>
              <th>Lote</th>
              <th>Produtor</th>
              <th>Município</th>
              <th>Qtd (kg)</th>
              <th>Valor (R$)</th>
              <th>Data Coleta</th>
              <th>Data Entrega</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>#034</td><td>João Pereira</td><td>Santarém</td><td>320</td><td>R$ 1.280,00</td><td>08/06/2025</td><td>10/06/2025</td><td className="entregue">✔ Entregue</td></tr>
            <tr><td>#035</td><td>Maria Souza</td><td>Óbidos</td><td>210</td><td>R$ 840,00</td><td>09/06/2025</td><td>—</td><td className="pendente">⏳ Pendente</td></tr>
            <tr><td>#033</td><td>Raimundo Costa</td><td>Oriximiná</td><td>450</td><td>R$ 1.800,00</td><td>07/06/2025</td><td>08/06/2025</td><td className="entregue">✔ Entregue</td></tr>
            <tr><td>#032</td><td>Ana Ferreira</td><td>Juruti</td><td>180</td><td>R$ 720,00</td><td>06/06/2025</td><td>—</td><td className="pendente">⏳ Pendente</td></tr>
            <tr><td>#031</td><td>Antônio Lima</td><td>Santarém</td><td>390</td><td>R$ 1.560,00</td><td>05/06/2025</td><td>06/06/2025</td><td className="entregue">✔ Entregue</td></tr>
            <tr><td>#030</td><td>Francisca Neves</td><td>Alenquer</td><td>270</td><td>R$ 1.080,00</td><td>04/06/2025</td><td>05/06/2025</td><td className="entregue">✔ Entregue</td></tr>
            <tr><td>#029</td><td>Carlos Mendes</td><td>Monte Alegre</td><td>500</td><td>R$ 2.000,00</td><td>03/06/2025</td><td>04/06/2025</td><td className="entregue">✔ Entregue</td></tr>
            <tr><td>#028</td><td>Rosane Oliveira</td><td>Santarém</td><td>150</td><td>R$ 600,00</td><td>02/06/2025</td><td>—</td><td className="pendente">⏳ Pendente</td></tr>
            <tr><td>#027</td><td>José Ribeiro</td><td>Óbidos</td><td>410</td><td>R$ 1.640,00</td><td>01/06/2025</td><td>02/06/2025</td><td className="entregue">✔ Entregue</td></tr>
            <tr><td>#026</td><td>Luzia Campos</td><td>Oriximiná</td><td>290</td><td>R$ 1.160,00</td><td>31/05/2025</td><td>01/06/2025</td><td className="entregue">✔ Entregue</td></tr>
          </tbody>
        </Tabela>
      </Main>

      <Footer>
        <p>© 2025 AçaíLink Amazônia | Sistema de Rastreamento da Produção de Açaí | Baixo Amazonas, Pará</p>
      </Footer>
    </Container>
  );
}