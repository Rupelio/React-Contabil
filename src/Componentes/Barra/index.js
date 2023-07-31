import './Barra.css'

const Barra = () => {
    return (
        <nav className='barra' id='barra'>
            <section>
                <img src="./imgs/Logo.jpeg" alt="Imagem de logo da página"/>
            </section>
            <section>
                <ul>
                    <li>
                        <a href='#barra'>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href='#barra'>
                            Escritorio Virtual
                        </a>
                    </li>
                    <li>
                        <a href='#barra'>
                            Nossa Empresa
                        </a>
                    </li>
                    <li>
                        <a href='#barra'>
                            Serviços
                        </a>
                    </li>
                    <li>
                        <a href='#barra'>
                            Contato
                        </a>
                    </li>
                </ul>
            </section>
            <section className='login'>
                <a href="#barra">Login</a>
            </section>
        </nav>
    )
}

export default Barra