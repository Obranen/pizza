import React from 'react'
import Product from '../../../components/Product/Product'
import FiltersProducts from '../../../components/Product/FiltersProducts/FiltersProducts'
import PaginationProducts from '../../../components/Product/PaginationProducts/PaginationProducts';

const PizzaPage = () => {
  return (
    <>
      <FiltersProducts/>
      <Product/>
      <PaginationProducts/>
    </>
  )
}

export default PizzaPage