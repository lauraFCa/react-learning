import { useState, useEffect } from "react"
import './Listagem.css'
import Item from '../../components/Item/Item'
import Loading from '../../components/Loading/Loading'
import { getOSservice } from '../../services/Services'

const Listagem = () => {

    const [load, setLoad] = useState(false)
    const [myOS, setMyOS] = useState([])

    const call = async () => {
        setLoad(true)
        const listOSs = await getOSservice()
        listOSs.sort().reverse()
        setMyOS(listOSs)
        setLoad(false)
    }

    useEffect(() => {
        call()
    }, [])


    return load ? (<Loading />) :
        (
            <div id="listagem">
                <h1>Lista de Chamados</h1>
                <div className="cards">
                    {myOS && myOS.map((item, idx) =>
                        <Item updatePage={call} os={item} key={idx} />)
                    }
                </div>
            </div>
        )

}

export default Listagem