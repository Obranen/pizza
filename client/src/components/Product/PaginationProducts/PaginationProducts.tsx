import React, {useEffect, useState} from 'react'
import {Col, Grid, Row} from 'react-flexbox-grid';
import {useSelectorHook} from '../../../hooks/useSelectorHook';
import PaginationProductsItem from './PaginationProductsItem/PaginationProductsItem';
import classes from './PaginationProducts.module.scss';

const PaginationProducts = () => {
  const {productsFilters, quantityShowedProducts} = useSelectorHook(state => state.productReducer)
  const [arrayPages, setArrayPages] = useState<number[]>()

  useEffect(() => {
    setArrayPages(pages(quantityShowedProducts))
  }, [productsFilters])

  const pages = (numberShowProducts: number) => {
    const numPage = Math.ceil(productsFilters.length / numberShowProducts)
    let arr = []
    for (let i = 0; i < numPage; i++) {
      arr.push(i + 1)
    }
    return arr
  }
  return (
    <Grid fluid>
      <Row>
        <Col sm={12}>
          <div className={classes.groupPages}>
            {arrayPages?.map((page, index) =>
              <PaginationProductsItem
                page={page}
                key={index}
              />
            )}
          </div>
        </Col>
      </Row>
    </Grid>
  )
}

export default PaginationProducts