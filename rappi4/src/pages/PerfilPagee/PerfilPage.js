import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { OrdersHistoryCard } from "../../components/OrdersHistoryCard";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";


export default function PerfilPage() {

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
                </section>
                <br/>
                <section>
                    {profile.user?.hasAddress ?
                        <div>
                            <span>Endereço Cadastrado:</span> <br />
                            <span>{profile.user?.address}</span>
                        </div> : <span>Usuario sem enderço cadastrado</span>
                    }
                </section>
                <br/>
                <section>
                <span>Histórico de pedidos</span><br />
                <hr />
                <OrdersHistoryCard dados={data} />
                </section>
            </main>

            <Footer page="profile" />
        </>
    )
}