import { BASE_URL, HEADERS } from "../constantes/url";
import axios from "axios";
import { goToAddress, goToFeed } from "../routes/Coordinator";


export const requestSignup = (form, navigate) => {
    const body = {
        name: form.name,
        email: form.email,
        cpf: form.cpf,
        password: form.password,
    }

    axios.post(`${BASE_URL}rappi4A/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            alert("Cadastro realizado com sucesso!");
            goToAddress(navigate)
        })
        .catch((err) => {
            alert("Erro ao fazer cadastro.")
            console.log(err.message)
        })
}

export const requestLogin = (form, clear, navigate) => {
    const body = {
        email: form.email,
        password: form.password,
    }

    axios.post(`${BASE_URL}rappi4A/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            alert("Login realizado com sucesso!");
            goToFeed(navigate)
        })
        .catch((err) => {
            alert("Erro ao fazer login.")
            console.log(err.message)
        })
}

export const requestAddress = (form, clear, navigate) => {
    const body = {
        street: form.street,
        number: form.number,
        neighbourhood: form.neighbourhood,
        city: form.city,
        state: form.state,
        complement: form.complement,
    }

    axios.put(`${BASE_URL}rappi4A/address`, body, HEADERS)
        .then((res) => {
            localStorage.setItem("token-address", res.data.token);
            alert("Endereço cadastrado com sucesso!")
            goToFeed(navigate)
        })
        .catch((err) => {
            alert("Erro ao cadastrar endereço.")
            console.log(err.message)
        })

}