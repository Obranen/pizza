import React, {useCallback, useEffect, useMemo, useState} from 'react'
import SortProducts from './SortProducts/SortProducts'
import {Grid, Row, Col} from 'react-flexbox-grid'
import classes from './Filters.module.scss'
import FindProduct from './FindProduct/FindProduct'
import {useSelectorHook} from '../../hooks/useSelectorHook'
import {useFilters} from '../../hooks/useFilters'
import {useDispatchHook} from '../../hooks/useDispatchHook'

const Filters = () => {
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

  const sortedAndFined = useFilters(productsClone, sortValue, findValue)

  useEffect(() => {
    fetchProductFilters(sortedAndFined)
  }, [sortedAndFined])

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
          <FindProduct getFindValue={getFindValue}/>
        </Col>
        <Col sm={4}>
          <SortProducts getSortValue={getSortValue}/>
        </Col>
      </Row>
    </Grid>
  )
}

export default Filters