import { useContext, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { GlobalContext } from "../../Global/GlobalContext";
import { useRequestData } from "../../hooks/useRequestData";
import { resquetsOrder } from "../../services/Request";
import styled from "styled-components";


const SectionCart = styled.section`

  height: 120vh;
`

export const CartPage = () => {
  const [profile] = useRequestData("rappi4A/profile", {});

  const [paymentMethod, setPaymentMethod] = useState("");

  const { states, setters } = useContext(GlobalContext);

  const { productsList, restaurant}  = states;

  const onChangeConfirm = (e) => {
    setPaymentMethod(e.target.value);
  };

  const confirmOrder = () => {
    resquetsOrder(productsList, paymentMethod, restaurant.restaurantId );
  };

  const valueTotal = () => {
    let value = 0
    for (let elemento of productsList) {
      value += elemento?.price * elemento?.quantity
    }

    const newValue = value + restaurant?.frete
    return newValue.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

  }

  console.log(restaurant)
  return (
    <SectionCart>
      <Header page="cart" />
      <p>Endereço de entrega:</p>
      <span>{profile.user?.address}</span>

      <hr />
      {productsList?.map((product) => {
        return (
          <section>
            <img src={product.photoUrl} width="20%" />
            <p>
              {product.name} - {product.quantity}
            </p>
            <p>{product.description}</p>
            <p>R$ {product.price}</p>
          </section>
        )
      })}


      <p>Frete: {restaurant?.frete.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })}</p>
      <p>SUBTOTAL: {valueTotal()}</p>

      <h4>Forma de pagamento</h4>
      <hr />

      <label>
        <input
          type="radio"
          name="pagamento"
          value="money"
          onChange={onChangeConfirm}
        />
        Dinheiro
      </label>

      <label>
        <input
          type="radio"
          name="pagamento"
          value="creditcard"
          onChange={onChangeConfirm}
        />
        Cartão de crédito
      </label>

      <button onClick={confirmOrder}>Confirmar</button>

      <Footer page="cart" />
    </SectionCart>
  );
};



