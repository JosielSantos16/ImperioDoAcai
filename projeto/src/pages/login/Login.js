import { 
    Div,
    Header,
    Titulo,
    Formulario,
    ConjutoDeCampo, 
    RotuloEmail, 
    InputEmail, 
    RotuloSenha, 
    InputSenha, 
    Botao } from './loginStyles'

export default function Login() {
    return (
        <>
            <Div>
                <Header>
                <Titulo>Império do Açaí</Titulo>
            </Header>
            <Formulario>
                <ConjutoDeCampo>
                    <RotuloEmail htmlFor="email">E-mail</RotuloEmail>
                    <InputEmail id="email" type="email" placeholder="Digite seu e-mail" />

                    <RotuloSenha htmlFor="senha">Senha</RotuloSenha>
                    <InputSenha id="senha" type="password" placeholder="Digite sua senha" />

                    <Botao type="submit">Login</Botao>
                </ConjutoDeCampo>
            </Formulario>
            </Div>
        </>
    )
}