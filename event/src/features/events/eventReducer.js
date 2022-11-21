import { ADD_EVENT, DELETE_EVENT } from "./type";

const initialState = {
    events: []
}

export const reducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_EVENT:
            return { ...state, events: [...state.events, action.payload] }
        case DELETE_EVENT:
            return { ...state, events: state.events.filter((_, index) => index !== action.id) }
        default:
            return state
    }
}