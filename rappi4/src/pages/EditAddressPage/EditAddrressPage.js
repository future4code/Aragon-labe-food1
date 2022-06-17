import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import useForm from "../../hooks/useForm";
import { requestAddress } from "../../services/Request";

export default function EditAddressPage() {
  const navigate = useNavigate();

  const editAddress = (e) => {
    e.preventDefault();

    requestAddress(form, navigate);
  };

  const { form, onChange } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  return (
    <main>
      <Header page="editAddress" />
      <form onSubmit={editAddress}>
        <h2>Meu endereço</h2>

        <section>
          <input
            id="logradouro"
            placeholder="Rua/Av"
            name={"street"}
            value={form.street}
            onChange={onChange}
            required
          />
        </section>

        <section>
          <input
            id="numero"
            placeholder="Número"
            name={"number"}
            value={form.number}
            onChange={onChange}
            required
          />
        </section>

        <section>
          <input
            id="complemento"
            placeholder="Apto. / Bloco"
            name={"complement"}
            value={form.complement}
            onChange={onChange}
          />
        </section>

        <section>
          <input
            id="bairro"
            placeholder="Bairro"
            name={"neighbourhood"}
            value={form.neighbourhood}
            onChange={onChange}
            required
          />
        </section>

        <section>
          <input
            id="cidade"
            placeholder="Cidade"
            name={"city"}
            value={form.city}
            onChange={onChange}
            required
          />
        </section>

        <section>
          <input
            id="estado"
            placeholder="Estado"
            name={"state"}
            value={form.state}
            onChange={onChange}
            required
          />
        </section>

        <button type={"submit"}>Alterar</button>
      </form>
    </main>
  );
}
