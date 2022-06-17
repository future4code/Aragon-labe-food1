import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { GlobalContext } from "../Global/GlobalContext";
import useForm from "../hooks/useForm";

const DivQuantidade = styled.div`
  position: absolute;
  z-index: 9999;
  background-color: white;
  border: solid 1px black;
  width: 328px;
  height: 216px;
  margin: 27px 16px 29px;
  padding: 11px 0 68px;
  background-color: #fff;
`;

export const ProductCard = (props) => {
  const [quantity, setQuantity] = useState(null);

  const params = useParams();
  const [divQuantity, setDivQuantity] = useState(false);

  const divQuantidade = () => {
    setDivQuantity(!divQuantity);
  };

  const onChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const { setters } = useContext(GlobalContext);

  const {
    setIdRestaurant,
    setIdProduct,
    setQuantityProduct,
    setProductName,
    setProductPrice,
    setProductImage,
    setProductDescription,
  } = setters;

  const addProduct = () => {
    alert("Deu certo");
    setIdProduct(props.product.id);
    setProductName(props.product.name);
    setProductPrice(props.product.price);
    setProductDescription(props.product.description);
    setProductImage(props.product.photoUrl);
    setIdRestaurant(params.restaurantId);
    setQuantityProduct(quantity);
  };

  return (
    <div key={props.product.name}>
      <img width="30%" src={props.product.photoUrl} />
      <p>{props.product.name}</p>
      <p>{props.product.description}</p>
      <p>
        {props.product.price.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <button onClick={divQuantidade}>Adicionar</button>
      {divQuantity === true ? (
        <DivQuantidade>
          <p>Selecione a quantidade desejada</p>
          <input
            type="number"
            placeholder="Quantidade"
            value={quantity}
            onChange={onChangeQuantity}
          />
          <button onClick={addProduct}>Adicionar ao carrinho</button>
        </DivQuantidade>
      ) : (
        <></>
      )}
      <hr />
    </div>
  );
};
