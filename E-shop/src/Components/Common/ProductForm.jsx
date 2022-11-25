import React from 'react'

const ProductForm = ({ formikValues }) => {
    const {handleChange, handleBlur, 
        values: { title, description, price },
        errors: { title: errTitle, description: errDescription,  price: errPrice } } = formikValues
        console.log(formikValues);
      
  return (
    <div className=''>
      <div className='field'>
        <label className='field-label' htmlFor="title">Title</label>
        <input className={`field-input ${errTitle ? "invalid" : ""}`} name='title' type="text" onChange={handleChange} onBlur={handleBlur} value={title} />
      </div>
      <div className='field'>
        <label className='field-label' htmlFor='description'>Description</label>
        <input className={`field-input ${errDescription ? "invalid" : ""}`} name='description' type="textarea" onChange={handleChange} onBlur={handleBlur} value={description} />
      </div>
      <div className='field'>
        <label className='field-label' htmlFor='price'>Price</label>
        <input className={`field-input ${errPrice ? "invalid" : ""}`} name='price' type="number" onChange={handleChange} onBlur={handleBlur} value={price} />
      </div>
    </div>
  )
}

export default ProductForm