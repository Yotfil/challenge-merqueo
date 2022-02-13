import styled, { keyframes } from 'styled-components';

const Cart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    p{
      margin-left: 15px;
    }
    FontAwesomeIcon {
      font-size: 30px;
    }
  `

const ContainerHeader = styled.header`
    background-color: var(--color-pink);
    color: var(--color-white);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
    h1 {
      color: var(--color-white);
      font-size: 4rem;
      font-style: italic;
    }
  `

const ContainerProduct = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--color-gray);
  border-radius: 8px;
  padding: 40px 10px;
  &:hover{
    box-shadow: var(--box-shadow);
  }
  img {
    width: 50%;
    margin-bottom: 40px;
  }
  `

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const Button = styled.button`
  background-color: var(--color-blue);
  border: none;
  border-radius: 30px;
  color: var(--color-white);
  padding: 15px 50px;
  text-transform: uppercase;
  font-size: var(--font-normal-price);
  cursor: pointer;
`

const ProductName = styled.p`
  font-size: var(--font-product-name);
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  `
const Price = styled.p`
  font-size: var(--font-price);
  margin: 20px 0;
`

const ContainerGrid = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr) );
  margin: auto;
  gap: 15px;
  padding: 100px 50px;
`

const CounterButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  span {
    background-color: var(--color-blue);
    color: var(--color-white);
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoaderStyled = styled.div`
  width: 100vw;
  height: calc(100vh - 121px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    width: 80px;
    height: 80px;
    border: 10px solid var(--color-pink);
    border-bottom: 10px solid var(--color-white);
    border-radius: 50%;
    animation: ${rotate} 1s linear infinite;
    margin-bottom: 30px;
  }
  p{
    color: var(--color-dark-pink);
    font-size: var(--font-promo-price);
    font-weight: 500;
    font-style: italic;
  }
`

const ContainerCard = styled.div`
  position: relative;
`

const CounterProducts = styled.span`
  position: absolute;
  background: #d0006f;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -20px;
  right: -15px;
`



  export {
    Cart,
    ContainerHeader,
    ContainerProduct,
    Button,
    ProductName,
    Price,
    ContainerGrid,
    CounterButtons,
    Detail,
    LoaderStyled,
    ContainerCard,
    CounterProducts
  }