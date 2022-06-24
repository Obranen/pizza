import React from 'react'
import {Col} from 'react-flexbox-grid'
import classes from './Contacts.module.scss'

const Contacts = () => {
    return (
      <Col sm={4}>
        <div className={classes.contacts}>
          Контакты
        </div>
      </Col>
    )
  }

export default Contacts