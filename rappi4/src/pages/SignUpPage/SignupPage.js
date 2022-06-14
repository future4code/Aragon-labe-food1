import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import LogoGeral from "../../images/logoGeral.png"
import { goToAddress, goToLogin } from "../../routes/Coordinator";
import { requestSignup } from "../../services/Request";


export default function SignupPage() {
    const navigate = useNavigate();
    
    const { form, onChange } = useForm({ name: "", email: "", cpf: "", password: "" })

    const createAccount = (e) => {
        e.preventDefault();
        requestSignup(form, navigate)
    }


    return (
        <main>
            <img src={LogoGeral} />
            <form onSubmit={createAccount}>
                <span>Cadastrar</span>

                <section>
                    <input
                        id="nome"
                        placeholder="Nome e Sobrenome"
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        required

                    />
                </section>

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
                        id="cpf"
                        placeholder="000.000.000-00"
                        name={"cpf"}
                        value={form.cpf}
                        onChange={onChange}
                        required
                    />
                </section>

                <section>
                    <input
                        id="senha"
                        placeholder="minímo de 6 caracteres"
                        name={"password"}
                        type={"password"}
                        pattern={"^.{6,8}$"}
                        title={"a senha deve ter no mínimo 6 e no máximo 8 caracteres"}
                        required
                    />
                </section>

                <section>
                    <input
                        id="confirmaSenha"
                        placeholder="Confirma a senha anterior"
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        type={"password"}
                        pattern={"^.{6,8}$"}
                        title={"a senha deve ter no mínimo 8 e no máximo 30 caracteres"}
                        required
                    />
                </section>

                <button type={"submit"}>Criar</button>
            </form>
            <button onClick={() => goToLogin(navigate)}> Voltar</button>
        </main>
    )
}