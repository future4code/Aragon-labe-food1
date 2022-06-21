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
  height: 150vh;
  margin-bottom: 120%;

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
  font-size: 1.2em;

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

const ImageProduct = styled.img`
  height: 190px;
  width: 160px;
  border-radius: 10px 0 0 10px;
  object-fit: cover;
`;

const DescriptionProduct = styled.section`
  margin-left: 20px;

  h3 {
    color: #e86e5a;
  }

  div {
    border: 3px solid #e86e5a;
    border-radius: 6px;
    text-align: center;
  }
`;

const TotalCart = styled.section`
  margin-right: 20px;
  text-align: right;

  h3 {
    color: #e86e5a;
  }

  h4 {
    color: black;
  }
`;

const CardProduct = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  margin-bottom: 2%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const CartPage = () => {
  const [profile] = useRequestData("rappi4A/profile", {});

  const [paymentMethod, setPaymentMethod] = useState("");

  const { states, setters } = useContext(GlobalContext);

  const { productsList, restaurant } = states;

  const { setProductsList } = setters;

  function recursiva(obj) {
    var _obj = {};
    for (var k in obj) {
      if (typeof obj[k] == "object" && obj.hasOwnProperty(k))
        _obj[k] = recursiva(obj[k]);
      else if (k == "id") _obj[k] = obj[k];
      else if (k == "quantity") _obj[k] = obj[k];
    }
    return _obj;
  }
  var newProductList = productsList?.map(recursiva);

  const busca = productsList.findIndex((product) => product.id === product.id);

  const removeItemFromCart = () => {
    let listProducts = [...productsList];
    if (listProducts[busca].quantity === 1) {
      listProducts.splice(busca, 1);
    } else {
      listProducts[busca].quantity -= 1;
    }
    setProductsList(listProducts);
    window.confirm("Deseja remover o produto da lista?");
  };

  const onChangeConfirm = (e) => {
    setPaymentMethod(e.target.value);
  };

  const confirmOrder = () => {
    resquetsOrder(newProductList, paymentMethod, restaurant.restaurantId);
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
            <CardProduct>
              <section>
                <ImageProduct width="30%" src={product.photoUrl} />
              </section>

              <DescriptionProduct>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <h4>
                  {product.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </h4>
                <h3>Quantidade: {product.quantity}</h3>
                <div>
                  <h3 onClick={removeItemFromCart}>remover</h3>
                </div>
              </DescriptionProduct>
            </CardProduct>
          );
        })}
        <TotalCart>
          <h4>
            Frete:{" "}
            {restaurant?.frete.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </h4>

          <h3>
            SUBTOTAL:
            {valueTotal()}
          </h3>
        </TotalCart>
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
