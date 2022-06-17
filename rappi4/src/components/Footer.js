import Home from "../images/home.png";
import Home1 from "../images/home1.png";
import Cart from "../images/cart.png";
import Cart1 from "../images/cart1.png";
import Avatar from "../images/avatar.png";
import Avatar1 from "../images/avatar1.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToCart, goToFeed, goToProfile } from "../routes/Coordinator";
import { useRequestData } from "../hooks/useRequestData";

const FooterStyled = styled.main`
  display: flex;
  width: 100vw;
  align-items: center;
  position: fixed;
  bottom: 0;
  height: 7vh;
  box-shadow: 0px 0px 5px black;
  background-color: white;
  img {
    width: 30px;
    height: 30px;
  }
  div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
  }
`;

const ActiveOrder = styled.div`
  background-color: #e86e5a;
  border: solid 1px black;
  position: static;

  z-index: 9999;
  margin-bottom: 50px;
`;

export const Footer = (props) => {
  const navigate = useNavigate();

  const [order] = useRequestData("rappi4A/active-order", {});

  const activeOrder = order.order;

  const renderActiveOrder = () => {
    if (order !== null) {
      return (
        <ActiveOrder>
          <p>Pedido em andamento</p>
          <p>{activeOrder?.restaurantName}</p>
          <h3>
            {" "}
            SUBTOTAL:
            {activeOrder?.totalPrice.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </h3>
        </ActiveOrder>
      );
    }
  };

  return (
    <div>
      {props.page === "home" ? renderActiveOrder() : <></>}
      <FooterStyled>
        <div>
          {props.page === "home" ? (
            <>
              <section>
                <img
                  src={Home}
                  onClick={() => goToFeed(navigate)}
                  alt="Ícone home"
                />
              </section>
            </>
          ) : (
            <img
              src={Home1}
              onClick={() => goToFeed(navigate)}
              alt="Ícone home"
            />
          )}
          {props.page === "cart" ? (
            <img
              src={Cart1}
              onClick={() => goToCart(navigate)}
              alt="Ícone carrinho"
            />
          ) : (
            <img
              src={Cart}
              onClick={() => goToCart(navigate)}
              alt="Ícone carrinho"
            />
          )}
          {props.page === "profile" ? (
            <img
              src={Avatar1}
              onClick={() => goToProfile(navigate)}
              alt="Ícone perfil"
            />
          ) : (
            <img
              src={Avatar}
              onClick={() => goToProfile(navigate)}
              alt="Ícone perfil"
            />
          )}
        </div>
      </FooterStyled>
    </div>
  );
};
