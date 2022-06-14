import { useNavigate } from "react-router-dom"
import useForm from "../../hooks/useForm"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import LogoGeral from "../../images/logoGeral.png"
import { goToSignup } from "../../routes/Coordinator"
import { requestLogin } from "../../services/Request"

export default function LoginPage() {
    useProtectedPage();
    
    const navigate = useNavigate()
    const { form, onChange} = useForm({ email: "", passaword: "" })


    const login = (e) => {
        e.preventDefault();
        requestLogin(form, navigate)
    }

    return (
        <main>
            <img src={LogoGeral} />
            <span>Entrar</span>

            <form onSubmit={login}>
                <section>
                    <input
                        id="email"
                        placeholder="email@email.com"
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        type={"email"}
                        required
                    />
                </section>

                <section>
                    <input
                        id="senha"
                        placeholder="minímo 6 caracteres"
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        type={"password"}
                        required
                    />
                </section>

                <button type="submit">Entrar</button>
            </form>

            <p onClick={() => goToSignup(navigate)} >Não possui cadastro? Clique aqui.</p>

        </main>
    )
}