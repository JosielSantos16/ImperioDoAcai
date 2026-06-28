import {
    Form,
    NomeProdutor,
    InserirProdutor,
    NomePropriedade,
    InserirPropriedade,
    Municipio,
    InserirMunicipio,
    Estado,
    InserirEstado,
    AreaProducao,
    InserirAreaProducao,
    ProducaoAnual,
    InserirAnual,
    TipoProducao,
    InserirProducao,
    Telefone,
    InserirTelefone,
    Email,
    InserirEmail,
    Observações,
    InserirObservacoes,
} from './formularioStyles'

export default function Formulario () {
    return (
        <>

            <Form>
                <NomeProdutor>Nome do produtor</NomeProdutor>
                <InserirProdutor />

                <NomePropriedade>Nome da propriedade:</NomePropriedade>
                <InserirPropriedade />

                <Municipio>Município:</Municipio>
                <InserirMunicipio />

                <Estado>Estado:</Estado>
                <InserirEstado />

                <AreaProducao>Área de produção:</AreaProducao>
                <InserirAreaProducao />

                <ProducaoAnual>Produção anual:</ProducaoAnual>
                <InserirAnual />

                <TipoProducao>Tipo de produção:</TipoProducao>
                <InserirProducao />

                <Telefone>Telefone:</Telefone>
                <InserirTelefone />

                <Email>E-mail:</Email>
                <InserirEmail />

                <Observações>Observações:</Observações>
                <InserirObservacoes />
            </Form>
        </>
    )
}

