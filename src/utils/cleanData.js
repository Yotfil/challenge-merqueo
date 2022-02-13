import getData from '../services/main-service';

const cleanData = async () => {

  const {data} = await getData()

  const newData = data.map(product => {

    const attributes = product.attributes

    const dataProduct = {
      id: product.id,
      name: attributes.name,
      price: attributes.price,
      special_price: attributes.special_price,
      image: attributes.image_medium_url,
      quantity: attributes.quantity,
      unit: attributes.unit,
      pum: attributes.pum[0],
    }
    return dataProduct
  })

  return newData

}

export default cleanData;