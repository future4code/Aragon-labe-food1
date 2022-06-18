import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useForm from "../../hooks/useForm";
import LogoGeral from "../../images/logoGeral.png";
import { goToSignup } from "../../routes/Coordinator";
import { requestLogin } from "../../services/Request";
import { Avatar, Button, Container, CssBaseline, TextField, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components"

const ImageLogo = styled.img` 
  width: 104px;
  height: 58px;

`

const ContainerLogin = styled.main` 
  display:grid;
  grid-template-columns: 1fr;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top:20%;
`

export default function LoginPage() {
  const navigate = useNavigate();
  const { form, onChange } = useForm({ email: "", password: "" });

  const login = (e) => {
    e.preventDefault();
    requestLogin(form, navigate);
  };
  const theme = createTheme()

  return (
    <ContainerLogin>
      
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline/>

         <ImageLogo src={LogoGeral} alt="Logo do Rappi4"         
         />     
          
          <Box
            sx={{
              m:3,
              display:"flex",
              flexDirection: "column",
              textAlign:"center",
            }}>
              <Typography sx={{fontSize:"16px", letterSpacing:"0.39px"}}> Entrar</Typography>
              <Box component="form" onSubmit={login} sx={{mt:1}}>
                <TextField
                  margin="normal"
                  required
                  id="email"
                  label="Seu E-mail:"
                  name="email"
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
                    fullWidth
                    name="password"
                    label="Sua Senha: "
                    type="password"
                    id="senha"
                    placeholder="minímo 6 caracteres"
                    autoComplete="current-password"
                    value={form.password}
                    onChange={onChange}
                    />
                    <Button type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, bgcolor:"#E86E5A", color:"#000000" }}

                    >Entrar</Button>

                    <Typography component="h3" sx={{fontWeight:"bold",}} onClick={() => goToSignup(navigate)}>
                      Não possui cadastro? Clique aqui.</Typography>                                   
              </Box>
            </Box>
        </Container>
      </ThemeProvider>  
    </ContainerLogin>
  );
}
