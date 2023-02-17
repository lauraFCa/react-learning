import './Login.css'
import { useState, useContext } from "react"
import Loading from "../../components/Loading/Loading"
import {LoginContext} from '../../components/AuthContext/AuthContext'


const Login = () => {
    
    const [values, setValues] = useState({login: "", senha: ""})
    const [load, setLoad] = useState(false)
    const [error, setError] = useState("")
    const {login, user} = useContext( LoginContext )
    
    const display = (user) ? 'hide' : 'show'
    
    const change = (e) => {
        setValues({...values, [e.target.name] : e.target.value }) //mantem valores antigos - substitui soh o novo valor
    }

    const envio = async(e) => {
        e.preventDefault()
        setLoad(true)
        const msg = await login(values.login, values.senha)
        if(msg){
            setLoad(false)
            setError(msg)
            setValues({login: "", senha: ""})
        }
    }

    return load ? (<Loading />):
    (
        <div id="login">
            <div className={display}>
                <h1>Faça seu login</h1>
                <form className="form" onSubmit={envio}>
                    <div className="campo">
                        <label htmlFor="login">Login</label>
                        <input type="text" name="login" value={values.login} onChange={change} required="1" />
                    </div>
                    <div className="campo">
                        <label htmlFor="password">Senha</label>
                        <input type="password" name="senha" value={values.senha} onChange={change} required="1" />
                    </div>
                    <h3>{error && <p>{error}</p>}</h3>
                    <div className="actions">
                        <button className="botao" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login