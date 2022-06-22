import React, {FC} from 'react'
import {Col} from 'react-flexbox-grid';

interface ILogin {}

const Login: FC<ILogin> =
  ({}) => {
    return (
      <Col sm={4}>
        Login
      </Col>
    )
  }

export default Login