import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";


export default function PerfilPage() {
    useProtectedPage();
    const [data] = useRequestData("rappi4A/profile", {})

    const showAddress = () => {
        // if (data.user?.hasAddress === true) {
        //     <div>
        //         <p>Endereço Cadastrado:</p>
        //         <span>{data.user?.address}</span>
        //     </div>
        // }
    }

    console.log(data.user?.hasAddress)
    console.log(data.user?.address)
    return (
        <>
            <main>
                <span>Meu Perfil</span>
                <h3>{data.user?.name}</h3>
                {data.user?.email}
                <p>{data.user?.cpf}</p>
                {/* {showAddress} */}
                {data.user?.hasAddress ?
                    <div>
                        <p>Endereço Cadastrado:</p>
                        <span>{data.user?.address}</span>
                    </div> : <span>Usuario sem enderço cadastrado</span>
                }
            </main>
        </>
    )
}