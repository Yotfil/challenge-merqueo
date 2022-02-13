import { CounterButtons } from '../utils/StyledComponents'


const CounterProduct = ({addProduct, quantityProduct, subProduct}) => {

  

  return (
    <CounterButtons>
      <span onClick={subProduct}>-</span>
      <p>{quantityProduct}</p>
      <span onClick={addProduct}>+</span>
    </CounterButtons>
   );
}

export default CounterProduct;