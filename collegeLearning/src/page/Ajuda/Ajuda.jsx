import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faSquareEnvelope, faAt } from '@fortawesome/free-solid-svg-icons'
import './Ajuda.css'

const Ajuda = () => {
    return(
        <div id="ajuda">
            <h1>Página de Ajuda</h1>
            <h2>Entre em contato conosco</h2>
            <div className="contatos">
                <p>
                    <FontAwesomeIcon icon={faPhone} />
                    32 3232-3232</p>
                <p>
                <FontAwesomeIcon icon={faSquareEnvelope} />
                    osapp@mail.com</p>
                <p>
                <FontAwesomeIcon icon={faAt} />
                    32 9 8888-8888</p>
            </div>
            <div className="rotas">
                <h3>Rotas do site:</h3>
                <ul>
                    <li>/ajuda</li>
                    <li>/home</li>
                    <li>/listagem <span>(apenas para usuários autenticados)</span></li>
                    <li>/ordem <span>(apenas para usuários autenticados)</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Ajuda