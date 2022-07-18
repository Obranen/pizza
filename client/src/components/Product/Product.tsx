import React from 'react'
import {Grid, Row} from 'react-flexbox-grid'
import {useSelectorHook} from '../../hooks/useSelectorHook'
import ProductItem from './ProductItem/ProductItem';

const Product = () => {
  const {productsFilters, loading, error} = useSelectorHook(state => state.productReducer)

  if (loading) {
    return <h1>Download...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  if (productsFilters.length === 0) {
    return <h3>Товар не найден</h3>
  }

  return (
    <Grid fluid>
      <Row>
        {productsFilters.map((product, index) =>
          <ProductItem
            product={product}
            key={product.id}
            index={index}
          />
        )}
      </Row>
    </Grid>
  )
}

export default Product