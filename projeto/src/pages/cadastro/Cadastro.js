import React from 'react'
import {
    Cabecalho,
    Titulo,
    Formulario,
    Campo,
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
    Divisao,
    Botao,
    Link
} from './cadastroStyle'

export default function Cadastro () {
    return (
        <>
            <Cabecalho>
                <Titulo>Cadastro Link Açaí Amazônia</Titulo>
            </Cabecalho>

            <Formulario>
                <Campo>Nome do produtor:</Campo>
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
            </Formulario>

            <Divisao>
                <Botao>
                    <Link>Voltar</Link>
                </Botao>

                <Botao>
                    <Link>Concluir Cadastro</Link>
                </Botao>
            </Divisao>
        </>
    )
}