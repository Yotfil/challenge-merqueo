import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContextCart } from '../contexts/contextCart'
import { Cart, ContainerCard, CounterProducts } from '../utils/StyledComponents'

const ShoppingCart = () => {

  const globlProductCounter = useContext(ContextCart).globlProductCounter
  const price = useContext(ContextCart).price


  return (
    <Cart>
      <ContainerCard>
        <FontAwesomeIcon icon="fa-cart-shopping" size="xl"/>
        <CounterProducts>{globlProductCounter}</CounterProducts>
      </ContainerCard>
      <p>Total: {new Intl.NumberFormat("es-CO").format(price)}</p>
    </Cart>
   );
}

export default ShoppingCart;