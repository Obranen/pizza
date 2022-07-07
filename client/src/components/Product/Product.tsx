import React from 'react'
import classes from './Product.module.scss'
import Button from '../UI/Button/Button';
import {Col, Grid, Row} from 'react-flexbox-grid';
import Checkbox from '../UI/Checkbox/Checkbox';

const Product = () => {
  return (
    <Grid fluid>
      <Row>
        <Col sm={3}>

          <div className={classes.product}>
            <a className={classes.imageLink} href="#">
              <img className={classes.image}
                   src="https://mafia.ua/storage/editor/fotos/480x0/gurmeo_1567060279780.jpeg" alt="pizza1"/>
            </a>
            <div className={classes.content}>
              <a className={classes.titleLink} href="#">
                <span>Карбонара метровая</span>
                <span className={classes.weight}> 1300 г</span>
              </a>
              <div className={classes.desc}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor dolore, eligendi, ex facere in
                ipsa
                labore magni modi nostrum odit omnis pariatur repudiandae sint voluptatibus! Eos iusto numquam rem.
              </div>
              <Checkbox type={'checkbox'} value={'value'} name={'Сырный бортик к средней пицце ' +
                '+29 грн'}/>
              <div className={classes.price}>250 гр</div>
              <Button>Заказать</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Grid>
  )
}

export default Product