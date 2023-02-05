import './Item.css'
import orderImg from '../../img/purchase-order-80.png'
import { Link } from "react-router-dom"
import { fecharOSservice } from '../../services/Services'
import { useState } from "react";
import Loading from '../Loading/Loading'

const Item = ({ os, updatePage }) => {

    const {
        id,
        nome,
        categoria,
        dataAbertura,
        usuario,
        status,
        descricao,
        dataPrevisaoFechamento,
    } = os

    const [load, setLoad] = useState(false)
    let display = (status === 'FECHADO') ? 'hide' : 'image show'

    const fechar = async () => {
        setLoad(true)
        const fechaOS = await fecharOSservice(id)
        setLoad(false)
        updatePage()
    }


    return load ? (<Loading />) :
        (
            <div id="item">
                <div className="card">
                    <div className="cardTitle">OS - {nome}</div>
                    <p>Categoria: <span>{categoria.nome}</span></p>
                    <p>Data da abertura: <span>{dataAbertura}</span></p>
                    <p>Previsão de fechamento: <span>{dataPrevisaoFechamento}</span></p>
                    <p>Status: <span>{status}</span></p>
                    <p>Nome: <span>{usuario.nome}</span></p>
                    <p>Descrição: <span>{descricao}</span></p>
                </div>
                <div className={display}>
                    <Link to={"/listagem"} onClick={fechar}>
                        <img src={orderImg} alt="order icon" />
                        <p>Fechar</p>
                    </Link>
                </div>
                
            </div>
        )
}

export default Item