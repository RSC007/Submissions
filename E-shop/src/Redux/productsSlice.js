import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: [
            {
                id: 1,
                title: "Food",
                description: "Eat lot",
                price: 100,
                photo: "abc",
            },
        ],
    reducers: {
        productAdd: (state, { payload }) => {
            state.push(payload)
        },
        productDelete: (state, { payload }) => state.filter(({ id }) => id !== payload.id),
        productUpdate: (state, { payload }) => state.map((data) => data.id === payload.id ? payload : data)
    },
});

export const products = state => state.products
export const { productAdd, productDelete, productUpdate } = productsSlice.actions;
export default productsSlice.reducer;