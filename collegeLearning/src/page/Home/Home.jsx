import './Home.css'
import niver from '../../img/niver.svg'
import { LoginContext } from '../../components/AuthContext/AuthContext'
import { useContext, useState, useEffect } from "react"
import { getOSbyStatusService } from '../../services/Services'
import Loading from '../../components/Loading/Loading'


const Home = ({ titulo, children }) => {

    const [load, setLoad] = useState(false)
    const [abertas, setAbertas] = useState('')
    const [fechadas, setFechadas] = useState('')

    const { versao, user } = useContext(LoginContext)
    let display = (user) ? 'card show' : 'hide'
    let userName = (user) ? user.nome : ' '

    useEffect(() => {
        const call = async () => {
            setLoad(true)
            const ab = await getOSbyStatusService('abertas')
            const fe = await getOSbyStatusService('fechadas')
            setAbertas(ab)
            setFechadas(fe)
            setLoad(false)
        }
        call()
    }, [])

    return load ? (<Loading />) :
        (
            <div id="home">
                <div className="cards">
                    <div className="card">
                        <div className="data">
                            <div className="nome long-and-truncated">
                                <h2>{titulo}</h2>
                            </div>
                            <div className="niver">
                                <p>{children}</p>
                                <span>Versão: {versao}</span>
                                <p>Nome :: {userName}</p>
                                <p>{(user) ? "Está logado(a)" : 'Não está logado(a)'}</p>
                            </div>
                        </div>
                        <div className="image">
                            <img src={niver} alt="festa" />
                        </div>
                    </div>
                    <div className={display}>
                        <p>Quantidade de OSs abertas: <span>{abertas}</span></p>
                        <p>Quantidade de OSs fechadas: <span>{fechadas}</span></p>
                    </div>
                </div>
            </div>
        )

}

export default Home