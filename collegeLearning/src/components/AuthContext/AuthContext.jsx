import { useNavigate } from "react-router-dom"
import { createContext, useState, useEffect } from "react"
import { loginService } from '../../services/Services'


export const LoginContext = createContext()
// informacao global em todo o sistema => usuario


const AuthContext = ({ children, versao }) => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const u = JSON.parse(localStorage.getItem('user'))
        if(u != null){
            setUser(u)
        }
    }, [])


    const login = async (login, senha) => {
        const lg = await loginService(login, senha)
        if (lg !== null) {
            localStorage.setItem('token', lg.token)
            localStorage.setItem('user', JSON.stringify(lg))
            setUser(lg)
            navigate("/")
        } else {
            return "Login ou Senha incorretos"
        }
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }


    return (
        <LoginContext.Provider value={
            {
                "versao": versao ?? "1.0",
                "autenticado": user !== null,
                "user": user,
                login,
                logout
            }
        }>
            {children}
        </LoginContext.Provider>
    )
}

export default AuthContext