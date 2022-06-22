import React from 'react'
import {Col} from 'react-flexbox-grid'
import classes from './Logo.module.scss'

const Logo = () => {
    return (
      <Col sm={4}>
        <div className={classes.logo}>
          Logo
        </div>
      </Col>
    )
  }

export default Logo