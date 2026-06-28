import {
    Divisao,
    BotaoVoltar,
    Botao,
    Link
} from './botoesStyles'

export default function Botoes () {
    return (
        <>
           <Divisao>
                <BotaoVoltar>
                    <Link>Voltar</Link>
                </BotaoVoltar>

                <Botao>
                    <Link>Concluir Cadastro</Link>
                </Botao>
            </Divisao>
        </>
    )
}

