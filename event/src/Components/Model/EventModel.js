import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import EventForm from '../EventForm';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';


// Constants
import { ADD_EVENT } from "../../features/events/type"

const initialValues = {
    eventName: "",
    eventType: "",
    eventDescription: "",
    startDate: "",
    endDate: "",
    handleBy: "",
    organisation: "",
    sunEvents: ""

}

const Eventmodal = ({ isOpen=false, toggle }) => {
    const dispatch = useDispatch()
    const { handleSubmit, ...formikValues } = useFormik({
        initialValues,
        onSubmit: values => {
            dispatch({ type: ADD_EVENT, payload: values})
            toggle()
        },
      });


    return (
        <div>
        <Modal isOpen={isOpen} toggle={toggle}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            <EventForm formikValues={formikValues} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={(e)=>{
                e.preventDefault()
                handleSubmit()
            }}>Submit</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
}

export default Eventmodal