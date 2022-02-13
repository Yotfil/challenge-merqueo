import { createContext, useState } from 'react';

const ContextCart = createContext()

const ProductsCart = ({children}) => {

  // const [quantityProduct, setQuantityProduct] = useState(0)

  // const addProduct = () => {
  //   setQuantityProduct(prev => prev+1)
  //   console.log(quantityProduct);
  // }
  // const subProduct = () => {
  //   setQuantityProduct(prev => prev-1)
  //   console.log(quantityProduct);

  const [globlProductCounter, setGloblProductCounter] = useState(0)
  const [price, setPrice] = useState(0)



return (
  <ContextCart.Provider
    value={
      {
        globlProductCounter:globlProductCounter,
        setGloblProductCounter:setGloblProductCounter,
        price: price,
        setPrice: setPrice
      }} >
    {children}
  </ContextCart.Provider>
 );
}

export {ContextCart, ProductsCart};