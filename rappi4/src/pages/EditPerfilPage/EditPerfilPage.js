import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import useForm from "../../hooks/useForm";
import { goToProfile } from "../../routes/Coordinator";
import { requestUpDateProfile } from "../../services/Request";
import { Avatar, Button, Container, CssBaseline, TextField, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme()
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
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              m: 3,
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}>

            <Box component="form" onSubmit={editAccount} sx={{ mt: 1 }}>

              <TextField
                margin="normal"
                required
                id="Nome"
                label="Nome e Sobrenome"
                name={"name"}
                autoComplete="name"
                placeholder="Nome e Sobrenome"
                fullWidth
                value={form.name}
                onChange={onChange}
                autoFocus
              />

              <TextField
                margin="normal"
                required
                id="email"
                label="Email"
                name={"email"}
                autoComplete="email"
                placeholder="email@email.com"
                fullWidth
                value={form.email}
                onChange={onChange}
                autoFocus
              />

              <TextField
                margin="normal"
                required
                id="cpf"
                label="cpf"
                name={"cpf"}
                autoComplete="cpf"
                placeholder="000.000.000-00"
                fullWidth
                value={cpfConvert(form.cpf)}
                onChange={onChange}
                autoFocus
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 4, mb: 3, bgcolor: "#E86E5A", color: "#000000" }}

              >
                Salvar
              </Button>

            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </main >
  );
}
