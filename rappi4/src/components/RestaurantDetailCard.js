import { useContext, useState } from "react";
import { GlobalContext } from "../Global/GlobalContext";
import { Header } from "./Header";
import { ProductCard } from "./ProductCard";
import { Box } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";


export const RestaurantDetailCard = (props) => {

  const restaurant = props.detail.restaurant;


  return (
    <div>

      <Header page="restaurant" />

      <Box
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          borderRadius: 10,
          alignItems: "center",
        }}
      >       
          <CardMedia
            component="img"
            image={restaurant?.logoUrl}
            alt="Logo do Restaurante"
            sx={{borderRadius:2, width:385}}
          />
          <CardContent sx={{ml:-8}}>                  
            <Typography sx={{fontSize:"16px", color:"#e86e5a", letterSpacing:"-0.39px" }}
            > {restaurant?.name}</Typography>

            <Typography sx={{fontSize:"16px", color:"#b8b8b8", letterSpacing:"-0.39px" }}
            > {restaurant?.category}</Typography>

            <Typography sx={{fontSize:"16px", color:"#b8b8b8", letterSpacing:"-0.39px"}}>{restaurant?.deliveryTime - 10}-{restaurant?.deliveryTime} min </Typography>

            <Typography sx={{mt:-3,fontSize:"16px", textAlign:"right", color:"#b8b8b8", letterSpacing:"-0.39px"}}>Frete: R${restaurant?.shipping},00 </Typography>

            <Typography sx={{fontSize:"16px", textAlign:"right", color:"#b8b8b8", letterSpacing:"-0.39px", mt:1}}> {restaurant?.address} </Typography>
          </CardContent>      
      </Box>

      {/* <img width={"50%"} src={} /> */}
      
      <h3>Menu</h3>
      <hr />
      {restaurant?.products.map((product) => {
        return (
          <ProductCard  frete={restaurant.shipping} product={product}/>
         
        );
      })} 
    </div>
  );
};

