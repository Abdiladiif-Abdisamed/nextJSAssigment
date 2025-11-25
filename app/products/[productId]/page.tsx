import React from 'react'

interface ProductsProps {
  params: {
    productId: string
  }
}

const ProductsDetail = ({ params }: ProductsProps) => {
  return (
    <div>ProductsDetail {params.productId}</div>
  )
}

export default ProductsDetail