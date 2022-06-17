import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { OrdersHistoryCard } from "../../components/OrdersHistoryCard";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { goToEditAddress, goToEditProfile } from "../../routes/Coordinator";

export default function PerfilPage() {
  const navigate = useNavigate();

  useProtectedPage();

  const [profile] = useRequestData("rappi4A/profile", {});

  const [data] = useRequestData("rappi4A/orders/history", {});

  return (
    <>
      <Header page="profile" />
      <main>
        <section>
          <span>{profile.user?.name}</span> <br />
          {profile.user?.email} <br />
          <span>{profile.user?.cpf}</span>
          <button onClick={() => goToEditProfile(navigate)}>
            Alterar dados do perfil
          </button>
        </section>
        <br />
        <section>
          {profile.user?.hasAddress ? (
            <div>
              <span>Endereço Cadastrado:</span> <br />
              <span>{profile.user?.address}</span>
              <button onClick={() => goToEditAddress(navigate)}>
                Alterar endereço
              </button>
            </div>
          ) : (
            <span>Usuario sem endereço cadastrado</span>
          )}
        </section>
        <br />
        <section>
          <span>Histórico de pedidos</span>
          <br />
          <hr />
          <OrdersHistoryCard dados={data} />
        </section>
      </main>

      <Footer page="profile" />
    </>
  );
}
