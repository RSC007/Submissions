import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CustomerForm from '../Forms/CustomerForm';

const CustomerModal = ({ modalProps: { toggle, isOpen, onSubmit, ...formProps } }) => {
  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Customer</ModalHeader>
        <ModalBody>
          {/* Form */}
          <CustomerForm formProps={formProps}/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onSubmit}>Add</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default CustomerModal