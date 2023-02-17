import './Rodape.css'
import { useContext } from "react"
import { Link } from "react-router-dom"
import { LoginContext } from '../AuthContext/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faArrowCircleLeft, faArrowRightToBracket, faPlus } from '@fortawesome/free-solid-svg-icons'

const Rodape = () => {

    const { autenticado, logout } = useContext(LoginContext)

    const logoutRodape = () => {
        logout()
    }

    const LoginLogout = () => {
        if (autenticado) {
            return (
                <Link className="tooltip" to={"/login"} onClick={logoutRodape}>
                    <span className="tooltiptext">Logout</span>
                    <FontAwesomeIcon icon={faArrowCircleLeft} />
                    {/* logout */}
                </Link>
            )
        } else {
            return (
                <Link to={"/login"} >
                    <FontAwesomeIcon icon={faArrowRightToBracket} />
                    {/* login */}
                </Link>
            )
        }
    }


    return (
        <div id="rodape">
            <ul>
                {autenticado &&
                    <li className="list">
                        <Link to={"/listagem"} >
                            <FontAwesomeIcon icon={faBars} />
                        </Link>
                    </li>
                }
                <li className="list">
                    <LoginLogout />
                </li>
            </ul>
            {autenticado &&
                <div className="iconFab">
                    <Link to="/ordem">
                        <FontAwesomeIcon icon={faPlus} />
                    </Link>
                </div>
            }
        </div>
    )
}

export default Rodape