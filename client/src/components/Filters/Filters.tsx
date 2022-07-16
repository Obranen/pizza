import React from 'react'
import SortProducts from './SortProducts/SortProducts'
import {Grid, Row, Col} from 'react-flexbox-grid'
import classes from './Filters.module.scss';

const Filters = () => {
  return (
    <Grid fluid>
      <Row className={classes.filters}>
        <Col sm={4}>
          <h2>Пицца</h2>
        </Col>
        <Col sm={4}>
          <h2>Find</h2>
        </Col>
        <Col sm={4}>
          <SortProducts/>
        </Col>
      </Row>
    </Grid>
  )
}

export default Filters