import React from 'react'
import { useSelector } from 'react-redux'
import { userRole } from '../../Redux/usersSlice'

const ProductCard = ({ features: { onEditProduct, onDeleteProduct, currentData } }) => {
  const userRolePresent = useSelector(userRole)

    return (
        <div key={currentData.id} className="card" style={{ width: "18rem", margin: "10px" }}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{currentData.title}</h5>
                <p className="card-text">{currentData.description}</p>
                <span>{currentData.price}</span>
            </div>
            {userRolePresent === "ADMIN" && <div className="card-footer w-100 d-flex justify-content-between">
                <button className='btn btn-info' onClick={() => onEditProduct(currentData)}>Edit</button>
                <button className='btn btn-danger' onClick={() => onDeleteProduct(currentData)}>Delete</button>
            </div>}
        </div>
    )
}

export default ProductCard