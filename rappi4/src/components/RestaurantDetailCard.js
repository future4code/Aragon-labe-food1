import { useContext, useState } from "react";
import { GlobalContext } from "../Global/GlobalContext";
import { Header } from "./Header";
import { ProductCard } from "./ProductCard";

export const RestaurantDetailCard = (props) => {


  const restaurant = props.detail.restaurant;


  return (
    <div>

      <Header page="restaurant" />

      <img width={"50%"} src={restaurant?.logoUrl} />
      <p>{restaurant?.name}</p>
      <p>
        {restaurant?.deliveryTime - 10}-{restaurant?.deliveryTime} min
      </p>
      <p>Frete R${restaurant?.shipping},00</p>
      <p>{restaurant?.address}</p>
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

