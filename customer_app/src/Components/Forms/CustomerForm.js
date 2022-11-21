import React from 'react';
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

const CustomerForm = ({ formProps: {
    value: { customerName,
        customerEmail,
        password,
        country,
        additionalInfo,
        uploadFile
    },
    error: {
        customerName: errorCustomerName,
        customerEmail: errorCustomerEmail,
        password: errorPassword,
        country: errorCountry,
        additionalInfo: errorAdditionalInfo,
        uploadFile: errorUploadFile
    },
    onSetCustomerDetail,
    checkValidation,
    onFileUpload
}
}) => {
    
    return (
        <Form>
            <FormGroup>
                <Label for="customerName">Customer Name</Label>
                <Input invalid={errorCustomerName} onBlur={(e) => checkValidation(e.target.name, e.target.value)} onChange={(e) => onSetCustomerDetail(e)} value={customerName} type="text" name="customerName" id="customerName" placeholder="Write Customer Name" />
                {errorCustomerName && (<FormFeedback>Enter atleast 5 charectors</FormFeedback>)}
            </FormGroup>
            <FormGroup>
                <Label for="customerEmail">Email</Label>
                <Input invalid={errorCustomerEmail} onBlur={(e) => checkValidation(e.target.name, e.target.value)} onChange={(e) => onSetCustomerDetail(e)} value={customerEmail} type="email" name="customerEmail" id="customerEmail" placeholder="Write Email" />
                {errorCustomerEmail && (<FormFeedback>Enter valid email id</FormFeedback>)}
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input invalid={errorPassword} onBlur={(e) => checkValidation(e.target.name, e.target.value)} onChange={(e) => onSetCustomerDetail(e)} value={password} type="password" name="password" id="password" placeholder="Password" />
                {errorPassword && (<FormFeedback>Enter the password atleast 5 charector</FormFeedback>)}
            </FormGroup>
            <FormGroup>
                <Label for="country">Country</Label>
                <Input invalid={errorCountry} onBlur={(e) => checkValidation(e.target.name, e.target.value)} onChange={(e) => onSetCustomerDetail(e)} value={country} type="select" name="country" id="country">
                    <option selected>Not Selected</option>
                    <option value={"India"}>India</option>
                    <option value={"USA"}>USA</option>
                    <option value={"UK"}>UK</option>
                    <option value={"Japan"}>Japan</option>
                </Input>
                {errorCountry && (<FormFeedback>Select atleast one country</FormFeedback>)}
            </FormGroup>
            <FormGroup>
                <Label for="additionalInfo">Additional Info</Label>
                <Input invalid={errorAdditionalInfo} onBlur={(e) => checkValidation(e.target.name, e.target.value)} onChange={(e) => onSetCustomerDetail(e)} value={additionalInfo} type="textarea" name="additionalInfo" id="additionalInfo" />
                {errorAdditionalInfo && (<FormFeedback>Enter at least 5 charectors</FormFeedback>)}
            </FormGroup>
            <FormGroup>
                <Label for="uploadFile">Upload File</Label>
                <Input accept='.pdf' invalid={errorUploadFile} onBlur={(e) => checkValidation(e.target.name, e.target.value)} onChange={onFileUpload} value={""} type="file" name="uploadFile" id="uploadFile" />
                {errorUploadFile && (<FormFeedback>Select atleast one file</FormFeedback>)}
            </FormGroup>
        </Form>
    )
}

export default React.memo(CustomerForm)