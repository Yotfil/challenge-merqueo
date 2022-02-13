import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import ProductCard from '../components/ProductCard';
import cleanData from '../utils/cleanData';
import { ContainerGrid } from '../utils/StyledComponents'

const ContainerProducts = () => {

  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const data = await cleanData();
    setProducts(data)
  }

  useEffect(()=>{
    getProducts()
  }, [])


  return (
    <ContainerGrid>
      {
        products.length > 0?
          products.map((product)=>{
            return <ProductCard key={product.id} product={product}></ProductCard>
          })

         :
         <Loader></Loader>
      }
      </ContainerGrid>
    );
}

export default ContainerProducts;