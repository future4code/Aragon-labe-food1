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
  const [productsList, setProductsList] = useState([])
  const [frete, setFrete] = useState("")

  const product = {
    productDescription,
    productImage,
    productName,
    productPrice,
    quantityProduct,
  }

  
  const newListProducts = () => {

    const list = product
    const newList = [...productsList, list ]

    setProductsList(newList)
  }

  const newListProducts2 = () => {
    const indiceCart = 
    productsList.findIndex((product)=>{
      return product.productName === productsList.productName
    })

    const newCart = [...productsList] 
  
    if(indiceCart === -1){
      const newProduct = {...product, quantityProduct: 1} 
      newCart.push(newProduct)
    } else {
      newCart [indiceCart].quantityProduct ++
    }
    setProductsList({productsList: newCart})
  }
  
  const setters = {
    setIdRestaurant,
    setIdProduct,
    setQuantityProduct,
    setProductName,
    setProductPrice,
    setProductDescription,
    setProductImage,
    setProductsList,
    setFrete
  }

  const states = {
    idRestaurant,
    idProduct,
    quantityProduct,
    productName,
    productPrice,
    productDescription,
    productImage,
    productsList,
    frete
  }

  const getters = {
    newListProducts,
    newListProducts2
  }


  return <GlobalContext.Provider value={{ setters, states , getters}}>
    {props.children}
  </GlobalContext.Provider>;
};
