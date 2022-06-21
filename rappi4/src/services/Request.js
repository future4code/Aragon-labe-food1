import { BASE_URL, HEADERS } from "../constantes/url";
import axios from "axios";
import { goToAddress, goToFeed, goToProfile } from "../routes/Coordinator";

export const requestSignup = (form, navigate) => {
  const body = {
    name: form.name,
    email: form.email,
    cpf: form.cpf,
    password: form.password,
  };

  axios
    .post(`${BASE_URL}rappi4A/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      alert("Cadastro realizado com sucesso!");
      goToAddress(navigate);
    })
    .catch((err) => {
      alert("Erro ao fazer cadastro.");
      console.log(err.message);
    });
};

export const requestLogin = (form, navigate) => {
  const body = {
    email: form.email,
    password: form.password,
  };

  axios
    .post(`${BASE_URL}rappi4A/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      alert("Login realizado com sucesso!");
      goToFeed(navigate);
    })
    .catch((err) => {
      alert("Erro ao fazer login.");
      console.log(err.message);
    });
};

export const requestAddress = (form, navigate) => {
  const body = {
    street: form.street,
    number: form.number,
    neighbourhood: form.neighbourhood,
    city: form.city,
    state: form.state,
    complement: form.complement,
  };

  axios
    .put(`${BASE_URL}rappi4A/address`, body, HEADERS)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      alert("Endereço cadastrado com sucesso!");
      goToFeed(navigate);
    })
    .catch((err) => {
      alert("Erro ao cadastrar endereço.");
      console.log(err.message);
    });
};

export const requestEditAddress = (form, navigate) => {
  const body = {
    street: form.street,
    number: form.number,
    neighbourhood: form.neighbourhood,
    city: form.city,
    state: form.state,
    complement: form.complement,
  };

  axios
    .put(`${BASE_URL}rappi4A/address`, body, HEADERS)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      alert("Endereço alterado com sucesso!");
      goToProfile(navigate);
    })
    .catch((err) => {
      alert("Erro ao cadastrar endereço.");
      console.log(err.message);
    });
};

export const resquetsOrder = (products, paymentMethod, restaurantId) => {
  const body = {
    products: products,
    paymentMethod: paymentMethod,
  };

  axios
    .post(`${BASE_URL}rappi4A/restaurants/${restaurantId}/order`, body, HEADERS)
    .then((res) => {
      alert("Pedido realizado com sucesso!");
    })
    .catch((err) => {
      alert("Erro ao cofirmar pedido.");
      console.log(err.message);
    });
};

export const requestUpDateProfile = (form, navigate) => {
  const body = {
    name: form.name,
    email: form.email,
    cpf: form.cpf,
  };

  axios
    .put(`${BASE_URL}rappi4A/profile`, body, HEADERS)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      alert("Perfil alterado com sucesso!");
      goToProfile(navigate);
    })
    .catch((err) => {
      alert("Erro ao alterar perfil.");
      console.log(err.message);
    });
};
