import React from 'react'
import {Col, Grid, Row} from 'react-flexbox-grid';
import classes from './Product.module.scss'
import Button from '../UI/Button/Button';
import {useSelectorHook} from '../../hooks/useSelectorHook';
import CheckboxProductItem from './CheckboxProductItem/CheckboxProductItem';

const Product = () => {
  const {productsFilters} = useSelectorHook(state => state.productReducer)

  return (
    <Grid fluid>
      <Row>
        {productsFilters.length !== 0 ?
          productsFilters.map((product) =>
            <Col key={product.id} sm={3}>
              <div className={classes.product}>
                <a
                  className={classes.imageLink}
                  href={product.image.href}>
                  <img
                    className={classes.image}
                    src={product.image.src}
                    alt={product.image.alt}
                  />
                </a>
                <div className={classes.content}>
                  <div className={classes.title}>
                    <a href={product.title.href}>
                      <span>{product.title.name}</span>
                    </a>
                    <span className={classes.weight}>{product.title.weight} г</span>
                  </div>
                  <div className={classes.desc}>
                    {product.desc}
                  </div>
                  <div className={classes.checkboxWrapper}>
                    {product.checkbox.map((checkbox: { value: string; name: string; price: number; id: number; }, index: React.Key) =>
                      <CheckboxProductItem
                        checkbox={checkbox}
                        key={index}
                      />
                    )}
                  </div>
                  <div className={classes.priceWrapper}>
                  <span data-id={product.id} className={classes.price}>
                    {product.price}
                  </span> грн
                  </div>
                  <Button className={classes.button}>Заказать</Button>
                </div>
              </div>
            </Col>
          ) :
          <>
            <h3>Товар не найден</h3>
          </>
        }
      </Row>
    </Grid>
  )
}

export default Product