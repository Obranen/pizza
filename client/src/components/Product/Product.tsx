import React from 'react'
import {Grid, Row} from 'react-flexbox-grid';
import ProductList from './ProductList/ProductList';

const Product = () => {
  return (
    <Grid fluid>
      <Row>
        <ProductList/>
      </Row>
    </Grid>
  )
}

export default Product