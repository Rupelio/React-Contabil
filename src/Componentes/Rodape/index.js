import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape'>
            <section>
                <h2>Contato</h2>
                <h3> Telefones:</h3>
                <p>(41) - 3019-9998</p>
                <p>(41) - 3324-6793</p>
                <h3>Endereço</h3>
                <p>Rua Conselheiro Laurindo 715, 1 Andar - Centro - Curitiba PR</p>
            </section>
            <section>
                <form>
                    <CampoTexto 
                        obrigatorio={true}
                        label="Nome *"
                        placeholder="Digite seu nome"
                    />
                    <CampoTexto 
                        obrigatorio={true}
                        label="Email *"
                        placeholder="Digite seu email"
                    />
                    <CampoTexto 
                        label="Assunto"
                        placeholder="Digite o assunto"
                    />
                    <CampoTexto 
                        obrigatorio={true}
                        label="Mensagem *"
                        placeholder="Digite a mensagem"
                    />
                    <Botao children="Enviar"/>
                </form>
            </section>
        </footer>
    )
}

export default Rodape