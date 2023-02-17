import './Principal.css'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Ajuda from '../Ajuda/Ajuda'
import CadastrarOS from '../CadastrarOS/CadastrarOS'
import Listagem from '../Listagem/Listagem'
import Rodape from '../../components/Rodape/Rodape'
import PrivateRoute from "../../components/Private/private"
import Cabecalho from '../../components/Cabecalho/Cabecalho'
import AuthContext from '../../components/AuthContext/AuthContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const Principal = () => {
    return (
        <BrowserRouter>
            <AuthContext versao={"1.0"}>
                <div id="principal">
                    <Cabecalho titulo="WEB OS" />
                    <Routes>
                        <Route path="/" element={
                            <Home titulo="Página Inicial">Seu sistema de chamados online</Home>
                        } />
                        <Route path="/login" element={<Login load={false} />} />
                        <Route path="/ajuda" element={<Ajuda />} />
                        <Route path="/listagem" element={<PrivateRoute><Listagem /></PrivateRoute>} />
                        <Route path="/ordem" element={<PrivateRoute><CadastrarOS /></PrivateRoute>} />
                        <Route path="*" element={<h1 className="naoExiste">Página não existe</h1>}></Route>
                    </Routes>
                    <Rodape />
                </div>
            </AuthContext>
        </BrowserRouter>
    )
}

export default Principal