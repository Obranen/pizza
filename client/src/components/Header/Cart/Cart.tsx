import React, {FC} from 'react'
import {Col} from 'react-flexbox-grid';

interface ICart {}

const Cart: FC<ICart> =
  ({}) => {
    return (
      <Col sm={4}>
        Cart
      </Col>
    )
  }

export default Cart