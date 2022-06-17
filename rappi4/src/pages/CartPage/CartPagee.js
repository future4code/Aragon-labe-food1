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

  const {
    idRestaurant,
    idProduct,
    quantityProduct,
    productsList,
    frete
  } = states;

  const onChangeConfirm = (e) => {
    setPaymentMethod(e.target.value);
  };

  const confirmOrder = () => {
    resquetsOrder(idProduct, quantityProduct, paymentMethod, idRestaurant);
  };

  const valueTotal = () => {
    let value = 0
    for (let elemento of productsList) {
      value += elemento?.productPrice * elemento?.quantityProduct
    }

    const newValue = value + frete
    return newValue.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

  }

  console.log(productsList)
  return (
    <SectionCart>
      <Header page="cart" />
      <p>Endereço de entrega:</p>
      <span>{profile.user?.address}</span>

      <hr />
      {productsList?.map((product) => {
        return (
          <section>
            <img src={product.productImage} width="20%" />
            <p>
              {product.productName} - {product.quantityProduct}
            </p>
            <p>{product.productDescription}</p>
            <p>R$ {product.productPrice}</p>
          </section>
        )
      })}


      <p>Frete: {frete.toLocaleString("pt-br", {
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



