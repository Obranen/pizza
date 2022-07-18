import React, {FC} from 'react'
import {Col} from 'react-flexbox-grid';
import classes from '../Product.module.scss';
import CheckboxProductItem from '../CheckboxProductItem/CheckboxProductItem';
import Button from '../../UI/Button/Button';
import {useSelectorHook} from '../../../hooks/useSelectorHook';
import {IProducts} from '../../../store/types/productTypes';

interface IProductItem {
  product: IProducts
  index: number
}

const ProductItem: FC<IProductItem> =
  ({product, index}) => {
    const {quantityShowedProducts} = useSelectorHook(state => state.productReducer)

    return (
      <Col key={product.id} sm={3}>
        {index < quantityShowedProducts ?
          <div className={classes.product}>
            <a
              className={classes.imageLink}
              href={product?.image?.href}>
              <img
                className={classes.image}
                src={product?.image?.src}
                alt={product?.image?.alt}
              />
            </a>
            <div className={classes.content}>
              <div className={classes.title}>
                <a href={product?.title?.href}>
                  <span>{product?.title?.name}</span>
                </a>
                <span className={classes.weight}>{product?.title?.weight} г</span>
              </div>
              <div className={classes.desc}>
                {product.desc}
              </div>
              <div className={classes.checkboxWrapper}>
                {product?.checkbox?.map((checkbox, index) =>
                  <CheckboxProductItem
                    checkbox={checkbox}
                    key={checkbox.id}
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
          : <></>}
      </Col>
    )
  }

export default ProductItem