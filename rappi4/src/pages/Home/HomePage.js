import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CategoryCard } from "../../components/CategoryCard";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { RestaurantCard } from "../../components/RestaurantCard";
import useForm from "../../hooks/useForm";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { goToLogin } from "../../routes/Coordinator";
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Container } from "@mui/material";

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  position: relative;
  font-size: 1em;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ContainerHome = styled.div`
  font-family: 'Roboto', sans-serif;
`


export default function HomePage() {
  useProtectedPage();

  const navigate = useNavigate();

  const [category, setcategory] = useState(null);

  const { form, onChange } = useForm({ query: "" });

  const [data] = useRequestData("rappi4A/restaurants", []);

  return (
    <ContainerHome>
      <Header page="home" />
      <Container component="main" maxWidth="xs">
      <Box sx={{ '& > :not(style)': { mr: 2, mt:2, mb:3 } }}>
      <TextField
         id={"query"}
         name={"query"}
         value={form.query}
         onChange={onChange}
         label="Restaurante"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined" fullWidth
        />
      </Box>
      </Container>

      <Div>
        {data.restaurants?.map((item) => {
          return (
            <div onClick={() => setcategory(item.category)}>
              <CategoryCard key={item.category} category={item.category} />
            </div>
          );
        })}
      </Div>
     
      {data.restaurants
        ?.filter((item) => {
          if (category === null) return item.id >= 1;
          else return item.category === category;
        })
        .filter((item) => {
          return item.name.toLowerCase().includes(form.query.toLowerCase());
        })
        .map((item) => {
          return <RestaurantCard restaurant={item} />;
        })}
      <Footer page="home" />
    </ContainerHome>
  );
}
