import React from 'react'
import { useFormik } from 'formik';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { useDispatch } from 'react-redux';
import * as Yup from "yup"

import ProductForm from './ProductForm';
import { productAdd, productUpdate } from '../../Redux/productsSlice';

const CommonModel = ({ features: { toggle }, data }) => {
  console.log('data', data);
  const dispatch = useDispatch()

  const { handleSubmit,
    ...formikValues } = useFormik({
      initialValues: {
        id: data.id ?? "",
        title: data.title ?? "",
        description: data.description ?? "",
        price: data.price ?? "",
        photo: data.photo ?? "defaul"
      },
      validationSchema: Yup.object({
        title: Yup.string().required(),
        description: Yup.string().required(),
        price: Yup.number().required(),
        photo: Yup.string()
      }),
      onSubmit: (values) => {
        if(values.id){
          dispatch(productUpdate(values))
        }else{
          dispatch(productAdd({...values, id: data.length+1}));
        }
        toggle()
      },
    });


  return (
    <div>
      <Modal className='h-50' isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>{data.id ? "Update the product" : "Add New Product"}</ModalHeader>
        <ModalBody>
          <ProductForm formikValues={formikValues} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>Add</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default CommonModel