import React, {FC} from 'react'
import {Col} from 'react-flexbox-grid';

interface ILanguages {}

const Languages: FC<ILanguages> =
  ({}) => {
    return (
      <Col sm={4}>
        Lang
      </Col>
    )
  }

export default Languages