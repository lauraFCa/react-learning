import './Cabecalho.css'
import { Link } from "react-router-dom"
import logo from '../../img/logoOS.svg'
import help from '../../img/bx_bx-help-circle.svg'

const Cabecalho = ({ titulo }) => {
    return (
        <div className="cabecalho">
            <Link to={"/"}>
                <img id="logo" src={logo} alt="Logo" />
            </Link>
            <h1 className="title">{titulo}</h1>
            <div className="quest">
                <Link to={"/ajuda"}>
                    <img src={help} alt="help" />
                </Link>
            </div>
        </div>
    )
}

export default Cabecalho