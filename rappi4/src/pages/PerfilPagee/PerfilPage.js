import { OrdersHistoryCard } from "../../components/OrdersHistoryCard";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";


export default function PerfilPage() {

    useProtectedPage();

    const [profile] = useRequestData("rappi4A/profile", {});
console.log(profile)
    const [data] = useRequestData("rappi4/orders/history", []);

    return (
        <>
            <main>
                <span>Meu Perfil</span> <br />
                <span>{profile.user?.name}</span> <br />
                {profile.user?.email} <br />


                <span>{profile.user?.cpf}</span>
                {profile.user?.hasAddress ?
                    <div>
                        <span>Endereço Cadastrado:</span> <br />
                        <span>{profile.user?.address}</span>
                    </div> : <span>Usuario sem enderço cadastrado</span>
                }
                <span>Histórico de pedidos</span><br />
                <hr />
                {/* <OrdersHistoryCard ???={data} /> */}
            </main>
        </>
    )
}