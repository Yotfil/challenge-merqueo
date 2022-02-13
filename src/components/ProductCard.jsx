import { useContext, useState} from 'react';
import { ContextCart } from '../contexts/contextCart';
import {ContainerProduct, Button, ProductName, Price, Detail} from '../utils/StyledComponents';
import CounterProduct from './CounterProduct';

const ProductCard = ({product}) => {

  const setGloblProductCounter = useContext(ContextCart).setGloblProductCounter
  const setPrice = useContext(ContextCart).setPrice

  const [quantityProduct, setQuantityProduct] = useState(0)

  const addProduct = () => {
    setQuantityProduct(prev => prev+1)
    setGloblProductCounter(prev => prev+1)
    setPrice(prev=>prev+Number(product.price))
  }
  const subProduct = () => {
    setQuantityProduct(prev => prev-1)
    setGloblProductCounter(prev => prev-1)
    setPrice(prev=>prev-Number(product.price))
  }

  return (
    <ContainerProduct>
      <img src={product.image} alt={`Imagen de ${product.name}`} />
      <Detail>
        <ProductName>{product.name}</ProductName>
        <Price>$ {new Intl.NumberFormat("es-CO").format(product.price)}</Price>
        {
          quantityProduct > 0 ?
            <CounterProduct
              addProduct={addProduct}
              subProduct={subProduct}
              quantityProduct={quantityProduct}
            >Más</CounterProduct>
            :
            <Button onClick={addProduct}>Comprar</Button>
        }
      </Detail>
    </ContainerProduct>
   );
}

export default ProductCard;