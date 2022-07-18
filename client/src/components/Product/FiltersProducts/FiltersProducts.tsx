import React, {useEffect, useMemo, useState} from 'react'
import SortProducts from './SortProducts/SortProducts'
import {Grid, Row, Col} from 'react-flexbox-grid'
import classes from './FiltersProducts.module.scss'
import FindProducts from './FindProduct/FindProducts'
import {useSelectorHook} from '../../../hooks/useSelectorHook'
import {useFiltersHook} from '../../../hooks/useFiltersHook'
import {useDispatchHook} from '../../../hooks/useDispatchHook'

const FiltersProducts = () => {
  const {products} = useSelectorHook(state => state.productReducer)
  const {fetchProductFilters} = useDispatchHook()
  const [sortValue, setSortValue] = useState('')
  const [findValue, setFindValue] = useState('')

  const productsClone = useMemo(() => {
    const sortTwoLevelLarger = (field1: string, field2: string) => {
      return (a: any, b: any) => a[field1][field2] > b[field1][field2] ? 1 : -1
    }

    return products.concat().sort(sortTwoLevelLarger('title', 'name'))
  }, [sortValue, findValue])

  const sortedAndFinedArray = useFiltersHook(productsClone, sortValue, findValue)

  useEffect(() => {
    fetchProductFilters(sortedAndFinedArray)
  }, [sortedAndFinedArray])

  const getSortValue = (value: string) => {
    setSortValue(value)
  }

  const getFindValue = (value: string) => {
    setFindValue(value)
  }

  return (
    <Grid fluid>
      <Row className={classes.filters}>
        <Col sm={4}>
          <h2 className={classes.title}>Пицца</h2>
        </Col>
        <Col sm={4}>
          <FindProducts getFindValue={getFindValue}/>
        </Col>
        <Col sm={4}>
          <SortProducts getSortValue={getSortValue}/>
        </Col>
      </Row>
    </Grid>
  )
}

export default FiltersProducts