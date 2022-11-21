import { ADD_EVENT, DELETE_EVENT } from "./type";

export function addEvent() {
    return {
      type: ADD_EVENT,
      payload
    }
  }

  export function deleteEvent() {
    return {
      type: DELETE_EVENT,
      index
    }
  }