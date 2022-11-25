import React from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

const ConfirmationModel = ({ toggle, title, onDelete, message, data }) => {

  return (
    <div>
      <Modal className='h-50' isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
            <p>{message}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => onDelete(data)}>Delete</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ConfirmationModel