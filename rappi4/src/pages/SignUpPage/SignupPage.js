import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import LogoGeral from "../../images/logoGeral.png";
import { requestSignup } from "../../services/Request";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import styled from "styled-components";
import { Header } from "../../components/Header";

const ImageLogo = styled.img` 
  width: 104px;
  height: 58px;
  margin-top: 10%;
`

const ContainerSignup = styled.main` 
  grid-template-columns: 1fr;
  align-items: center;
  text-align: center;
  justify-content: center;
  
`


export default function SignupPage() {
  useUnprotectedPage();

  const navigate = useNavigate();

  const { form, onChange } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const createAccount = (e) => {
    e.preventDefault();
    requestSignup(form, navigate);
  };

  const cpfConvert = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  const theme = createTheme()

  return (
    <ContainerSignup>
      <Header page="signup" />
      <ImageLogo src={LogoGeral} alt="Logo do Rappi4" />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              margin: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <Typography sx={{
              fontSize: "16px", letterSpacing: "0.39px"
            }}>
              Cadastrar</Typography>

            <Box component="form" noValidate onSubmit={createAccount} sx={{ mt: 3, borderRadius: 10 }}>
              <Grid container spacing={1} sx={{}}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id={"name"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    label={"Seu nome"}
                    placeholder="Nome e Sobrenome"
                    autoFocus
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id={"email"}
                    type={"email"}
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"Seu E-mail"}
                    placeholder="email@email.com"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="cpf"
                    label={"Seu CPF"}
                    name={"cpf"}
                    placeholder="000.000.000-00"
                    value={cpfConvert(form.cpf)}
                    onChange={onChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="senha"
                    placeholder="minímo de 6 caracteres"
                    name={"password"}
                    type={"password"}
                    pattern={"^.{6,8}$"}
                    title={"a senha deve ter no mínimo 6 e no máximo 8 caracteres"}
                    label={"Sua Senha"}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="confirmaSenha"
                    placeholder="Confirma a senha anterior"
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    type={"password"}
                    pattern={"^.{6,8}$"}
                    title={"a senha deve ter no mínimo 8 e no máximo 30 caracteres"}
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 4, mb: 3, bgcolor: "#E86E5A", color: "#000000" }}

              >
                Criar
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </ContainerSignup>
  );
} 
