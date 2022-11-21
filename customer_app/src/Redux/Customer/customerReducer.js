import { ADD_CUSTOMER } from "../types";

const initialState = {
    customers: []
}

export const reducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            return { ...state, customers: [...state.customers, action.payload] }
        default:
            return state
    }
}