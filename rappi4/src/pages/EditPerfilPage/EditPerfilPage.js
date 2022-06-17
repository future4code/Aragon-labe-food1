import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import useForm from "../../hooks/useForm";
import LogoGeral from "../../images/logoGeral.png";
import { goToProfile } from "../../routes/Coordinator";
import { requestUpDateProfile } from "../../services/Request";

export default function EditPerfilPage() {
  const navigate = useNavigate();

  const { form, onChange } = useForm({
    name: "",
    email: "",
    cpf: "",
  });

  const editAccount = (e) => {
    e.preventDefault();
    requestUpDateProfile(form, navigate);
  };

  const cpfConvert = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  return (
    <main>
      <Header page="editprofile" />
      <form onSubmit={editAccount}>
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
            value={cpfConvert(form.cpf)}
            onChange={onChange}
            required
          />
        </section>

        <button type={"submit"}>Salvar</button>
      </form>
    </main>
  );
}
