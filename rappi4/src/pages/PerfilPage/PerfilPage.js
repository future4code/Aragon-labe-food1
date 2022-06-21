import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { OrdersHistoryCard } from "../../components/OrdersHistoryCard";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { goToEditAddress, goToEditProfile } from "../../routes/Coordinator";
import Edit from "../../images/editIcone.png";
import styled from "styled-components";

const ContainerProfile = styled.main`
  font-family: "Roboto", sans-serif;
  height: 180vh;
`;

const SectionProfile = styled.section`
  margin: 5%;
  margin-bottom: 0;
  font-size: 16px;

  section {
    display: flex;
    justify-content: space-between;
  }
`;

const SectionAddress = styled.section`
  width: 360px;
  height: 76px;
  margin: 16px 0;
  padding: 16px;
  background-color: #eee;
  padding-bottom: 0;

  div {
    font-size: 16px;
    img {
      margin-right: 5%;
    }
  }

  section {
    display: flex;
    justify-content: space-between;

    span {
      color: #b8b8b8;
    }
  }
`;

const SectionOrders = styled.section`
  margin-left: 5%;
  margin-right: 5%;
`;

export default function PerfilPage() {
  const navigate = useNavigate();

  useProtectedPage();

  const [profile] = useRequestData("rappi4A/profile", {});

  const [data] = useRequestData("rappi4A/orders/history", {});

  return (
    <ContainerProfile>
      <Header page="profile" />

      <SectionProfile>
        <section>
          <span>{profile.user?.name}</span>
          <img
            src={Edit}
            width="8%"
            onClick={() => goToEditProfile(navigate)}
          />
        </section>
        {profile.user?.email} <br />
        <span>{profile.user?.cpf}</span>
      </SectionProfile>
      <br />
      <SectionAddress>
        {profile.user?.hasAddress ? (
          <div>
            <section>
              <span>Endereço Cadastrado</span>
              <img
                src={Edit}
                width="8%"
                onClick={() => goToEditAddress(navigate)}
              />
            </section>

            <span>{profile.user?.address}</span>
          </div>
        ) : (
          <span>Usuario sem endereço cadastrado</span>
        )}
      </SectionAddress>
      <br />
      <SectionOrders>
        <span>Histórico de pedidos</span>
        <hr />
        <OrdersHistoryCard dados={data} />
      </SectionOrders>

      <Footer page="profile" />
    </ContainerProfile>
  );
}
