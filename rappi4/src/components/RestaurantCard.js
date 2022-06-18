import { useNavigate } from "react-router-dom";
import { goToResultPage } from "../routes/Coordinator";
import { Box, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const RestaurantCard = (props) => {
  const navigate = useNavigate();

  return (

    <article>
      <Box
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          borderRadius: 2,
          alignItems: "center",
        }}
      >
        <Card  onClick={() => {
          goToResultPage(navigate, props.restaurant.id);
        }} sx={{width: 340, borderRadius:3}}>

          <CardMedia
            component="img"
            image={props.restaurant.logoUrl}
            alt="Logo do Restaurante"
          />
          <CardContent>                  
            <Typography sx={{fontSize:"16px", color:"#e86e5a", letterSpacing:"-0.39px" }}
            > {props.restaurant.name}</Typography>

            <Typography sx={{fontSize:"16px", color:"#b8b8b8", letterSpacing:"-0.39px"}}>
            {props.restaurant.deliveryTime - 10} - {props.restaurant.deliveryTime} min </Typography>

            <Typography sx={{fontSize:"16px", textAlign:"right", color:"#b8b8b8", letterSpacing:"-0.39px"}}>
            Frete: R${props.restaurant.shipping},00 </Typography>
            
          </CardContent>
        </Card>
      </Box>
    </article>
  );
};
