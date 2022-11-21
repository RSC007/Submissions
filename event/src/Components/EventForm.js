import React from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";  


const EventForm = ({ formikValues }) => {
    const { values, handleChange, handleBlur, setFieldValue } = formikValues
    return (
        <Form>
            <FormGroup>
                <Label for="eventName">Event Name</Label>
                <Input type="text" name="eventName" id="eventName" onChange={handleChange} onBlur={handleBlur} placeholder="Enter Event" />
            </FormGroup>
            <FormGroup>
                <Label for="eventType">Event Type</Label>
                <Input
                    type="select"
                    name="eventType"
                    id="eventType"
                    onChange={handleChange}
                    onBlur={handleBlur}
                >
                    <option value="Sport" >Sport</option>
                    <option value="Music" >Music</option>
                    <option value="General" >General</option>
                    <option value="Children" >Children</option>
                    <option value="School" >School</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label>Start Date</Label>
                <DatePicker id="startDate" className="startDate form-control" selected={values?.startDate ? values.startDate : new Date()} onChange={(val)=>setFieldValue("startDate", val)}
                selectsStart
                startDate={new Date()}
                endDate={values?.endDate ? values.endDate : new Date()}
                 />
            </FormGroup>
            <FormGroup>
                <Label>End Date</Label>
                <DatePicker id="endDate" className="endDate form-control" selected={values?.endDate ? values.endDate : new Date()} onChange={(val)=>setFieldValue("endDate", val)} 
                selectsEnd
                startDate={values?.startDate ? values.startDate : new Date()}
                endDate={values?.endDate ? values.endDate : new Date()}
                minDate={values?.startDate ? values.startDate : new Date()}
                />
            </FormGroup>
            <FormGroup>
                <Label for="eventDescription">Text Area</Label>
                <Input type="textarea" name="eventDescription" id="eventDescription" onChange={handleChange} onBlur={handleBlur} />
            </FormGroup>
            <FormGroup>
                <Label for="handleBy">Event Handle By</Label>
                <Input type="text" name="handleBy" id="handleBy" onChange={handleChange} onBlur={handleBlur} />
            </FormGroup>
            <FormGroup>
                <Label for="organisation">Organisation</Label>
                <Input type="text" name="organisation" id="organisation" onChange={handleChange} onBlur={handleBlur} />
            </FormGroup>
            <FormGroup>
                <Label for="sunEvents">Sub Events</Label>
                <Input type="number" name="sunEvents" id="sunEvents" onChange={handleChange} onBlur={handleBlur} />
            </FormGroup>
        </Form>
    )
}

export default EventForm