import React, {FC} from 'react'
import {Col} from 'react-flexbox-grid';

interface IContacts {}

const Contacts: FC<IContacts> =
  ({}) => {
    return (
      <Col sm={4}>
        Contacts
      </Col>
    )
  }

export default Contacts