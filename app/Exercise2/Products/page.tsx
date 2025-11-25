import React from 'react'

 const Product =  async () => {3
    const data = await fetch('https://fakestoreapi.com/products');
    const products = await data.json();
  return (
    <div>
        <ul>
          {products.slice(0, 5).map((product: { id: number; title: string }) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
    </div>
  )
}

    export default Product