import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Button } from "reactstrap"

import { ADD_CUSTOMER } from './Redux/types';
import Card from './Components/Common/Card';
import CustomerModal from "./Components/Modals/CustomerModal"

// style
import './App.css';

const initialValue = {
  customerName: "",
  customerEmail: "",
  password: "",
  country: "",
  additionalInfo: "",
  uploadFile: "",
}

function App() {
  // states
  const [ismodalOpen, setIsmodalOpen] = useState(false)
  const [customerDetail, setCustomerDerail] = useState(initialValue)
  const [selectDetail, setSelectDetail] = useState({})
  const [error, setError] = useState(initialValue)

  const dispatch = useDispatch()
  const customers = useSelector(state => state.customer.customers)

  const toggle = () => setIsmodalOpen(!ismodalOpen)

  const onSelectDetail = (detail) => setSelectDetail(detail)

  const onSetCustomerDetail = (e) => setCustomerDerail({ ...customerDetail, [e.target.name]: e.target.value })

  const loadFileData = (file) => {
    const reader = new FileReader()
    return new Promise((resolve, reject) =>{
      reader.onerror = () => {
        reader.abort()
        reject("Not valid")
      }

      reader.onload = () => {
        resolve(reader.result)
      }
      reader.readAsArrayBuffer(file)
    })
  }

  const onFileUpload =async (e) =>{
    try{
      const fileContent = await loadFileData(e.target.files[0])
      setCustomerDerail({ ...customerDetail, uploadFile: fileContent})
    }catch{
      console.log("error")
    }
  }

  const downloadFile =(e)=>{
    var blob = new Blob([selectDetail.uploadFile],  {type: "application/pdf"})
    var objectUrl = URL.createObjectURL(blob);
    // Download Feature
    // download(objectUrl)
    window.open(objectUrl);
}

  // validation function
  const checkValidation = (key, currentValue = "") => {
    let value = currentValue ?? customerDetail[key]
    switch (key) {
      case "customerName":
        return setError({ ...error, [key]: !(value.length > 5) })
      case "customerEmail":
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return setError({ ...error, [key]: !regex.test(value.toLowerCase()) })
      case "password":
        return setError({ ...error, [key]: !(value.length > 5) })
      case "country":
        return setError({ ...error, [key]: !value.length })
      case "additionalInfo":
        return setError({ ...error, [key]: !value.length })
      case "uploadFile":
        return setError({ ...error, [key]: !!value })
      default:
        return false
    }
  }

  const onSubmit = (e) => {
    if (!Object.values(error).filter(val => val).length && !(Object.values(error).filter(val => typeof(val) === 'string').length > 0)) {
      dispatch({ type: ADD_CUSTOMER, payload: customerDetail })
      setCustomerDerail(initialValue)
      toggle()
    }
  }

  // props 
  const modalProps = {
    isOpen: ismodalOpen,
    toggle: toggle,
    onSetCustomerDetail,
    checkValidation,
    onFileUpload,
    onSubmit,
    value: customerDetail,
    error
  }
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Button className='info' onClick={toggle}>Add Customer</Button>
          <section className='container'>
            <div className='left list'>
              {
                customers?.length ? customers.map((detail, index) => <Card onSelectDetail={onSelectDetail} detail={{ ...detail, index }} />) : ""
              }
            </div>
            <div className='right detail'>
              {
                selectDetail.customerEmail ?
                <>
                <ul>
                  <li>Name:  {selectDetail.customerName}</li>
                  <li>Email:  {selectDetail.customerEmail}</li>
                  <li>Password:  {selectDetail.password}</li>
                  <li>Country:  {selectDetail.country}</li>
                  <li>Additional Info:  {selectDetail.additionalInfo}</li>
                  <li>Upload File:  {selectDetail.uploadFile?.name ?? "no name"}</li>
                </ul>
                <Button type="submit" onClick={downloadFile}>Download</Button>
              </>:
              ""
              }
            </div>
          </section>
        </header>
      </div>
      {/* modal  */}
      {ismodalOpen && <CustomerModal modalProps={modalProps} />}
    </>
  );
}

export default App;
