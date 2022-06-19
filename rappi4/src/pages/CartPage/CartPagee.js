import { useContext, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { GlobalContext } from "../../Global/GlobalContext";
import { useRequestData } from "../../hooks/useRequestData";
import { resquetsOrder } from "../../services/Request";
import styled from "styled-components";
import { Button } from "@mui/material";

const AddressDetails = styled.section`
  width: 360px;
  height: 76px;
  padding: 16px;
  background-color: #eee;

  p {
    color: #b8b8b8;
  }

  span {
    font-size: 16px;
    font-weight: bold;
  }
`;

const SectionCart = styled.section`
  font-family: "Roboto", sans-serif;
  height: 120vh;
  margin-bottom: 200px;

  button {
    width: 328px;
    height: 42px;
    padding: 12px 16px;
    border-radius: 2px;
    background-color: #e86e5a;
    font-size: 16px;
  }
`;

const PaymentMethodSection = styled.section`
  display: grid;

  section {
    margin-top: 10%;
    text-align: center;
  }

  label {
    margin-left: 5%;
  }
`;

const SectionTitlePayment = styled.section`
  margin: 5%;
`;

const DetailsOrders = styled.div`
  margin: 5%;
`;

export const CartPage = () => {
  const [profile] = useRequestData("rappi4A/profile", {});

  const [paymentMethod, setPaymentMethod] = useState("");

  const { states, setters } = useContext(GlobalContext);

  const { productsList, restaurant } = states;

  const onChangeConfirm = (e) => {
    setPaymentMethod(e.target.value);
  };

  const confirmOrder = () => {
    resquetsOrder(productsList, paymentMethod, restaurant.restaurantId);
  };

  const valueTotal = () => {
    let value = 0;
    for (let elemento of productsList) {
      value += elemento?.price * elemento?.quantity;
    }

    const newValue = value + restaurant?.frete;
    return newValue.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <SectionCart>
      <Header page="cart" />
      <AddressDetails>
        <p>Endereço de entrega:</p>
        <span>{profile.user?.address}</span>
      </AddressDetails>

      <DetailsOrders>
        {productsList?.map((product) => {
          return (
            <section>
              <img src={product.photoUrl} width="30%" />
              <p>
                {product.name} - {product.quantity}
              </p>
              <p>{product.description}</p>
              <p>R$ {product.price}</p>
            </section>
          );
        })}

        <p>
          Frete:{" "}
          {restaurant?.frete.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <p>SUBTOTAL: {valueTotal()}</p>
      </DetailsOrders>

      <SectionTitlePayment>
        <h4>Forma de pagamento</h4>
        <hr />
      </SectionTitlePayment>
      <PaymentMethodSection>
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

        <section>
          <button onClick={confirmOrder}>Confirmar</button>
        </section>
      </PaymentMethodSection>

      <Footer page="cart" />
    </SectionCart>
  );
};
