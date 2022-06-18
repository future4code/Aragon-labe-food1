import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import useForm from "../../hooks/useForm";
import { requestAddress, requestEditAddress } from "../../services/Request";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

export default function EditAddressPage() {
  const navigate = useNavigate();

  const editAddress = (e) => {
    e.preventDefault();

    requestEditAddress(form, navigate);
  };

  const { form, onChange } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const theme = createTheme()

  return (
    <main>
      <Header page="editAddress" />
      <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs" >
                    {<CssBaseline />}
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
                            Meu Endereço
                        </Typography>

                        <Box component="form" noValidate onSubmit={editAddress} sx={{ mt: 3, borderRadius: 10 }}>
                            <Grid container spacing={1} sx={{}}>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id={"logradouro"}
                                        name={"street"}
                                        value={form.street}
                                        onChange={onChange}
                                        label={"Rua/Av"}
                                        placeholder="Rua/Av"
                                        autoFocus
                                    />

                                </Grid >

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id={"numero"}
                                        name={"number"}
                                        value={form.number}
                                        onChange={onChange}
                                        label={"Número"}
                                        placeholder="Número"
                                        autoFocus
                                    />

                                </Grid >

                                <Grid item xs={12}>
                                    <TextField

                                        fullWidth
                                        id={"complemento"}
                                        name={"complement"}
                                        value={form.complement}
                                        onChange={onChange}
                                        label={"Apto. / Bloco"}
                                        placeholder="Apto. / Bloco"
                                        autoFocus
                                    />

                                </Grid >

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id={"bairro"}
                                        name={"neighbourhood"}
                                        value={form.neighbourhood}
                                        onChange={onChange}
                                        label={"Bairro"}
                                        placeholder="Bairro"
                                        autoFocus
                                    />
                                </Grid >

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id={"cidade"}
                                        name={"city"}
                                        value={form.city}
                                        onChange={onChange}
                                        label={"Cidade"}
                                        placeholder="Cidade"
                                        autoFocus
                                    />

                                </Grid >

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id={"estado"}
                                        name={"state"}
                                        value={form.state}
                                        onChange={onChange}
                                        label={"Estado"}
                                        placeholder="Estado"
                                        autoFocus
                                    />

                                </Grid >
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 4, mb: 3, bgcolor: "#E86E5A", color: "#000000" }}

                            >
                                Alterar
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
    </main>
  );
}
