import Home from "../images/home.png"
import Home1 from "../images/home1.png"
import Cart from "../images/cart.png"
import Cart1 from "../images/cart1.png"
import Avatar from "../images/avatar.png"
import Avatar1 from "../images/avatar1.png"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { goToCart, goToFeed, goToProfile } from "../routes/Coordinator"

const FooterStyled = styled.main`
    display: flex;
    width: 100vw;
    align-items: center;
    position: fixed;
    bottom: 0;
    height: 7vh;
    box-shadow: 0px 0px 5px black;
    background-color: white;
    img{
      width: 30px;
      height: 30px;
    }
    div{
      display: flex;
      width: 100%;
      align-items: center;
      justify-content:space-around;
    }
`


export const Footer = (props) => {
    const navigate = useNavigate()


    return (
        <FooterStyled>
            <div>
                {props.page === "home" ?
                    <img src={Home}  onClick={() => goToFeed(navigate)} alt="Ícone home"/>
                    : <img src={Home1} onClick={() => goToFeed(navigate)} alt="Ícone home" />
                }
                {props.page === "cart" ?
                    <img src={Cart1}  onClick={() => goToCart(navigate)} alt="Ícone carrinho"/>
                    : <img src={Cart}  onClick={() => goToCart(navigate)} alt="Ícone carrinho"/>
                }
                {props.page === "profile" ?
                    <img src={Avatar1}  onClick={() => goToProfile(navigate)} alt="Ícone perfil"/>
                    : <img src={Avatar} onClick={() => goToProfile(navigate)}alt="Ícone perfil"/>
                }
            </div>
        </FooterStyled>
    )
}