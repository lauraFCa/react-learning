
const URL = "https://todo-uni.herokuapp.com"

const loginService = async (login, senha) => {
    const objetoLogin = {
        "login": login,
        "password": senha
    }

    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(objetoLogin),
        redirect: "follow"
    }

    const resp = await fetch(`${URL}/login`, requestOptions)
        .catch(error => console.log("Erro" + error))

    if (resp.ok) {
        return await resp.json()
    } else {
        return null
    }
}

const getCategoriasService = async () => {
    var token = (localStorage.getItem('token')) ? localStorage.getItem('token') : ' '

    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append("Authorization", `Bearer ${token}`)

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    }

    const resp = await fetch(`${URL}/api/os/categoria`, requestOptions)
        .catch(error => console.log("Erro" + error))

    if (resp.ok) {
        return await resp.json()
    } else {
        return null
    }
}

const salvarOSservice = async (os) => {
    
    var token = (localStorage.getItem('token')) ? localStorage.getItem('token') : ' '

    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append("Authorization", `Bearer ${token}`)

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(os),
        redirect: "follow"
    }

    const resp = await fetch(`${URL}/api/os`, requestOptions)
        .catch(error => console.log("Erro" + error))

    if (resp.ok) {
        return await resp.json()
    } else {
        return null
    }
}

const getOSservice = async () => {
    var token = (localStorage.getItem('token')) ? localStorage.getItem('token') : ' '

    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append("Authorization", `Bearer ${token}`)

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    }

    const resp = await fetch(`${URL}/api/os`, requestOptions)
        .catch(error => console.log("Erro" + error))

    if (resp.ok) {
        return await resp.json()
    } else {
        return null
    }
}

const fecharOSservice = async (id) => {
    var token = (localStorage.getItem('token')) ? localStorage.getItem('token') : ' '

    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append("Authorization", `Bearer ${token}`)

    var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        redirect: "follow"
    }

    const resp = await fetch(`${URL}/api/os/${id}/fechar`, requestOptions)
        .catch(error => console.log("Erro" + error))
        
    if (resp.ok) {
        return await resp.text()
    } else {
        return null
    }
}

const getOSbyStatusService = async (status) => {

    var token = (localStorage.getItem('token')) ? localStorage.getItem('token') : ' '

    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append("Authorization", `Bearer ${token}`)

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    }

    const resp = await fetch(`${URL}/api/os/${status}/count`, requestOptions)
        .catch(error => console.log("Erro" + error))

    if (resp.ok) {
        return await resp.json()
    } else {
        return null
    }
}

export { loginService, getCategoriasService, salvarOSservice, getOSservice, fecharOSservice, getOSbyStatusService }