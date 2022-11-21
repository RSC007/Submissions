import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Button } from "reactstrap"
import { DELETE_EVENT } from '../features/events/type'

const EventsList = () => {
  const events = useSelector(state => state.events.events)
  const dispatch = useDispatch()
  return (
    <Table dark>
      <thead>
        <tr>
          <th>Index</th>
          <th>Event Name</th>
          <th>Event Type</th>
          <th>Event Description</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Event handle by</th>
          <th>Event Organisation</th>
          <th>Sub Events</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          events?.length ? events.map(({
            eventName,
            eventType,
            eventDescription,
            startDate,
            endDate,
            handleBy,
            organisation,
            sunEvents }, index) =>
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{eventName}</td>
              <td>{eventType}</td>
              <td>{eventDescription}</td>
              <td>{Date(startDate)}</td>
              <td>{Date(endDate)}</td>
              <td>{handleBy}</td>
              <td>{organisation}</td>
              <td>{sunEvents}</td>
              <td><Button onClick={() => dispatch({type: DELETE_EVENT, id: index})}>Delete</Button></td>
            </tr>
          ): ""
        }
      </tbody>
    </Table>
  )
}

export default EventsList