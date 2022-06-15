import { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalState = (props) => {
  const [idRestaurant, setIdRestaurant] = useState(null)
  const [idProduct, setIdProduct] = useState("")
  const [quantityProduct, setQuantityProduct] = useState(null)
  const [productName, setProductName] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const [productDescription, setProductDescription] = useState("")
  const [productImage, setProductImage] = useState("")
  
  const setters = {
    setIdRestaurant,
    setIdProduct,
    setQuantityProduct,
    setProductName,
    setProductPrice,
    setProductDescription,
    setProductImage
  }

  const states = {
    idRestaurant,
    idProduct,
    quantityProduct,
    productName,
    productPrice,
    productDescription,
    productImage
  }


  return <GlobalContext.Provider value={{ setters, states }}>
    {props.children}
  </GlobalContext.Provider>;
};
