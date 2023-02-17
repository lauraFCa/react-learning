import './CadastrarOS.css'
import { useEffect, useState } from "react"
import { getCategoriasService, salvarOSservice } from '../../services/Services'
import Loading from '../../components/Loading/Loading'
import { useNavigate } from "react-router-dom"


const CadastrarOS = () => {

    // **** DATA ATUAL *** //
    const [data, setData] = useState("2010-10-10")
    const getToday = () => { // pega data de hoje e coloca no formato correto
        var today = new Date()
        var mes = (today.getMonth() + 1).toString()
        var month = (mes.length < 2) ? ('0' + mes) : mes
        var dia = today.getFullYear() + "-" + month + "-" + today.getDate()
        setData(dia)
    }

    const formatarData = (data) => {
        var ano = data.split("-")[0]
        var mes = data.split("-")[1]
        var dia = data.split("-")[2]

        return dia + '/' + mes + '/' + ano
    }

    // **** METODOS *** //
    const [values, setValues] = useState({
        "nome": "",
        "descricao": "",
        "categoria": 1,
        "dataPrevisaoFechamento": "",
    })
    const [load, setLoad] = useState(false)
    const [categorias, setCategorias] = useState(null)
    const navigate = useNavigate()

    const change = (e) => {
        const { value, name } = e.target
        setValues({ ...values, [name]: value })
    }

    useEffect(() => {
        getToday()

        const call = async () => {
            setLoad(true)
            const catgs = await getCategoriasService()
            setCategorias(catgs)
            setLoad(false)
        }

        call()
    }, [])

    const cadastrar = async (e) => {
        e.preventDefault()
        setLoad(true)

        values.dataPrevisaoFechamento = formatarData(values.dataPrevisaoFechamento)
        const msg = await salvarOSservice(values)
        setLoad(true)
        navigate('/listagem')
    }

    return load ? (<Loading />) :
        (
            <div id="ordem">
                <h2>Cadastro de OS</h2>
                <form className="form" id="newOSform" onSubmit={cadastrar}>
                    <div className="campo">
                        <label htmlFor="nome">*Nome</label>
                        <input type="text" name="nome" required="1" value={values.nome} onChange={change} />
                    </div>
                    <div className="campo">
                        <label htmlFor="categoria">*Categoria</label>
                        <select name="categoria" form="newOSform" value={values.categoria} onChange={change}>
                            {categorias && categorias.map((cat, i) =>
                                <option key={i} value={cat.id}>{cat.nome}</option>
                            )}
                        </select>
                    </div>
                    <div className="campo">
                        <label htmlFor="descricao">*Descrição</label>
                        <input type="text" name="descricao" required="1" value={values.descricao} onChange={change} />
                    </div>
                    <div className="campo">
                        <label htmlFor="dataAbertura">Data de Abertura</label>
                        <input type="date" name="dataAbertura" disabled value={data} />
                    </div>
                    <div className="campo">
                        <label htmlFor="dataPrevisaoFechamento">*Previsão de Fechamento</label>
                        <input type="date" name="dataPrevisaoFechamento" required="1" value={values.dataPrevisaoFechamento} onChange={change} />
                    </div>
                    <div className="actions">
                        <button className="botao" type="submit">Cadastrar</button>
                    </div>
                </form>
            </div>
        )
}

export default CadastrarOS