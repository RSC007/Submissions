import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productDelete, products } from '../../Redux/productsSlice'
import CommonModel from '../Common/CommonModel'
import ConfirmationModel from '../Common/ConfirmationModel'
import ProductCard from '../Common/ProductCard'

const Home = () => {
  const [isModelOpen, setIsModelOpen] = useState(false)
  const [isConfirmModelOpen, setIsConfirmModelOpen] = useState(false)
  const pruductDetails = useSelector(products)
  const [data, setData] = useState(pruductDetails)
  
  const dispatch = useDispatch()

  const toggle = () => setIsModelOpen(!isModelOpen)

  const onEditProduct = (currentProduct) => {
    setData(currentProduct)
    toggle()
  }
  const onDeleteProduct = (currentProduct) => {
    setData(currentProduct)
    setIsConfirmModelOpen(true)
  }

  const features = {
    onEditProduct,
    onDeleteProduct,
    toggle,
  }
  return (
    <>
      <div className='container'>
        <div className="add-new">
          <button onClick={toggle}>Add New</button>
        </div>
        <div className="w-80 m-auto d-flex">
          {
            pruductDetails?.length ?
              pruductDetails.map((data) => <ProductCard key={data.id} features={{ ...features, currentData: data }} />) :
              null
          }
        </div>
      </div>

      {isModelOpen && <CommonModel features={features} data={data} />}

      {isConfirmModelOpen &&
        <ConfirmationModel
          title="Delete Product"
          message="Are you sure you want delete this product?"
          onDelete={(data) => {
            dispatch(productDelete(data))
            setIsConfirmModelOpen(false)
            setData(pruductDetails)
          }}
          data={data}
          toggle={() => setIsConfirmModelOpen(!isConfirmModelOpen)}
        />}

    </>
  )
}

export default Home