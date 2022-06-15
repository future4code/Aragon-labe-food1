import { useNavigate } from "react-router-dom";
import { goToBack, goToLogin } from "../routes/Coordinator";
import Back from "../images/back.png"
import styled from "styled-components"


const SectionHeaders = styled.header`
    text-align: center;

`
const SectionHeaderHome = styled.section`
    display:flex;
    align-items: center;
    justify-content: space-between;
`

const SectionHearderRestaurant = styled.section`
    display:flex;
    align-items: center;
    justify-content: space-between;

    img{
        width:25px;
        height:25px;
    }

`


export const Header = (props) => {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        localStorage.removeItem("token-address")
        goToLogin(navigate)
    }

    const renderizaHeader = () => {
        switch (props.page) {
            case "home":
                return (
                    <header>
                        <SectionHeaderHome>
                            <h3>Rappi4</h3>
                            <button onClick={logout} >logout</button>
                        </SectionHeaderHome>
                        <hr />
                    </header>
                )
            case "cart":
                return (
                    <SectionHeaders>
                        <h3>Meu carrinho</h3>
                        <hr />
                    </SectionHeaders>
                )
            case "profile":
                return (
                    <SectionHeaders>
                        <h3>Meu perfil</h3>
                        <hr />
                    </SectionHeaders>
                )
            case "restaurant":
                return (
                    <header>
                        <SectionHearderRestaurant>

                            <img src={Back} onClick={() => goToBack(navigate)} alt="Ícone para voltar a pagina anterior" />
                            <h3>Restaurante</h3>

                        </SectionHearderRestaurant>
                        <hr />
                    </header>
                )
        }
    }

    return (
        <main>
            {renderizaHeader()}
        </main>
    )
}