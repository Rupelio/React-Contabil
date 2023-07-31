import './Areas.css'

const Areas = (props) => {
    return(
        <section className='area'>
            <ul>
                <li>
                    <a href='#'> 
                        <img src={props.img}/>
                        <p>{props.servicos}</p>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Areas