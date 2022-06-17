import { useContext, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { GlobalContext } from "../../Global/GlobalContext";
import { useRequestData } from "../../hooks/useRequestData";
import { resquetsOrder } from "../../services/Request";

export const CartPage = () => {
  const [profile] = useRequestData("rappi4A/profile", {});

  const [paymentMethod, setPaymentMethod] = useState("");

  const { states, setters } = useContext(GlobalContext);

  const {
    idRestaurant,
    idProduct,
    quantityProduct,
    productName,
    productPrice,
    productDescription,
    productImage,
  } = states;

  const onChangeConfirm = (e) => {
    setPaymentMethod(e.target.value);
  };

  const confirmOrder = () => {
    resquetsOrder(idProduct, quantityProduct, paymentMethod, idRestaurant);
  };

  return (
    <section>
      <Header page="cart" />
      <p>Endereço de entrega:</p>
      <span>{profile.user?.address}</span>

      <hr />

      <img src={productImage} width="20%" />
      <p>
        {productName} - {quantityProduct}
      </p>
      <p>{productDescription}</p>
      <p>R$ {productPrice}</p>

      <p>Frete:</p>
      <p>SUBTOTAL: </p>

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
    </section>
  );
};

{
  /* <select>
                <option>Débito</option>
                <option>Cartão de crédito</option>
            </select> */
}
