import Areas from '../Areas'
import './Servicos.css'

const Servicos = () => {
    return(
        <div className='servicos'>
            <section>
                <h1>
                    Serviços
                </h1>
            </section>
            <section className='areas'>
                <Areas servicos="Auditoria" img="./imgs/auditop.png"/>
                <Areas servicos="Constituição de Empresas" img="./imgs/empresa.png"/>
                <Areas servicos="Contabilidade" img="./imgs/contabilidade.png"/>
                <Areas servicos="Acessoria Fiscal" img="./imgs/fiscal.png"/>
                <Areas servicos="Acessoria Departamento Pessoal" img="./imgs/rh.png"/>
            </section>
        </div>
    )
}

export default Servicos