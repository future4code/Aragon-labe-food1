import { useNavigate } from "react-router-dom";
import { goToBack, goToLogin } from "../routes/Coordinator";
import Back from "../images/back.png";
import styled from "styled-components";
import EditAddressPage from "../pages/EditAddressPage/EditAddrressPage";

const SectionHeaders = styled.header`
  text-align: center;
`;
const SectionHeaderHome = styled.section`
  text-align:center;
`;

const SectionHearderRestaurant = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 5% 0;

  img {
    width: 25px;
    height: 25px;
  }

  p{
    color:gray;
  }
`;

export const Header = (props) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("token-address");
    goToLogin(navigate);
  };

  const renderizaHeader = () => {
    switch (props.page) {
      case "home":
        return (
          <header>
            <SectionHeaderHome>
              <h3>Rappi4</h3>
            </SectionHeaderHome>
            <hr />
          </header>
        );
      case "cart":
        return (
          <SectionHeaders>
            <h3>Meu carrinho</h3>

          </SectionHeaders>
        );
      case "profile":
        return (
          <header>
            <SectionHearderRestaurant>
              <h3>Meu perfil</h3>
              <p onClick={logout}>logout</p>

            </SectionHearderRestaurant>
            <hr />
          </header>
        );
      case "editAddress":
        return (
          <header>
            <SectionHearderRestaurant>
              <img
                src={Back}
                onClick={() => goToBack(navigate)}
                alt="Ícone para voltar a pagina anterior"
              />
              <h3>Endereço</h3>
            </SectionHearderRestaurant>
            <hr />
          </header>
        );
      case "signup":
        return (
          <header>
            <SectionHearderRestaurant>
              <img
                src={Back}
                onClick={() => goToBack(navigate)}
                alt="Ícone para voltar a pagina anterior"
              />
            </SectionHearderRestaurant>
            <hr />
          </header>
        );
      case "addresspage":
        return (
          <header>
            <SectionHearderRestaurant>
              <img
                src={Back}
                onClick={() => goToBack(navigate)}
                alt="Ícone para voltar a pagina anterior"
              />
            </SectionHearderRestaurant>
            <hr />
          </header>
        );
      case "editprofile":
        return (
          <header>
            <SectionHearderRestaurant>
              <img
                src={Back}
                onClick={() => goToBack(navigate)}
                alt="Ícone para voltar a pagina anterior"
              />
              <h3>Editar</h3>
            </SectionHearderRestaurant>
            <hr />
          </header>
        );
      case "restaurant":
        return (
          <header>
            <SectionHearderRestaurant>
              <img
                src={Back}
                onClick={() => goToBack(navigate)}
                alt="Ícone para voltar a pagina anterior"
              />
              <h3>Restaurante</h3>
            </SectionHearderRestaurant>
            <hr />
          </header>
        );
      default:
        return (
          <></>
        )
    }
  };

  return <main>{renderizaHeader()}</main>;
};
