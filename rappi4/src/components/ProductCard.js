import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { GlobalContext } from "../Global/GlobalContext";
import useForm from "../hooks/useForm";
import Button from "@mui/material/Button";

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
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
`;

const CardProduct = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  margin-bottom: 2%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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

  p {
    color: #b8b8b8;
  }
`;

export const ProductCard = (props) => {
  const [quantity, setQuantity] = useState(1);

  const params = useParams();
  const [divQuantity, setDivQuantity] = useState(false);

  const divQuantidade = () => {
    setDivQuantity(!divQuantity);
  };

  const onChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const { setters, getters } = useContext(GlobalContext);

  const { newListProducts } = getters;

  const { setRestaurant } = setters;

  const addProduct = () => {
    const newProduct = { ...props.product, quantity: quantity };
    setRestaurant({ restaurantId: params.restaurantId, frete: props.frete });
    newListProducts(newProduct);
    setDivQuantity(!quantity);
    alert("Pedido adicionado!");
  };

  return (
    <CardProduct key={props.product.name}>
      <section>
        <ImageProduct width="30%" src={props.product.photoUrl} />
      </section>

      <DescriptionProduct>
        <h3>{props.product.name}</h3>
        <p>{props.product.description}</p>
        <h4>
          {props.product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </h4>
        <button onClick={divQuantidade}>Adicionar</button>
      </DescriptionProduct>
      {divQuantity === true ? (
        <DivQuantidade>
          <p>Selecione a quantidade desejada</p>
          <input
            type="number"
            placeholder="Quantidade"
            value={quantity}
            onChange={onChangeQuantity}
          />
          <section>
            <Button onClick={addProduct} variant="text">
              Adicionar ao carrinho
            </Button>
          </section>
        </DivQuantidade>
      ) : (
        <></>
      )}
    </CardProduct>
  );
};
