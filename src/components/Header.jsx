import ShoppingCart from './ShoppingCart';
import { ContainerHeader } from '../utils/StyledComponents'

const Header = () => {

  return (
    <ContainerHeader>
      <h1>Mercado!</h1>
      <ShoppingCart></ShoppingCart>
    </ContainerHeader>
   );
}

export default Header;