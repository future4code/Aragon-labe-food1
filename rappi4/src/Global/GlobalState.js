import { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalState = (props) => {
  const [restaurant, setRestaurant] = useState(null)
  const [productsList, setProductsList] = useState([])  
  const newListProducts = (newProduct) => {

    const indiceCart = 
    productsList.findIndex((product)=>{
      return product.id === newProduct.id
    })

    const newCart = [...productsList] 
  
    if(indiceCart === -1){
      newCart.push(newProduct)
    } else {
      newCart[indiceCart].quantity = newProduct.quantity
    }
    setProductsList(newCart)

  }

  const setters = {
    setRestaurant, 
    setProductsList, 
  }

  const states = {
    restaurant,
    productsList,
  }

  const getters = {
    newListProducts,
  }


  return <GlobalContext.Provider value={{ setters, states , getters}}>
    {props.children}
  </GlobalContext.Provider>;
};
