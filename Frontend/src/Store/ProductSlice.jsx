import { createSlice } from '@reduxjs/toolkit'
import { PRODUCTS_URL } from '../Api';
import axios from 'axios';

const initialState = {
    data: [],
};

const productSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        fetchProducts(state, action) {
            state.data = action.payload;
        }
    }
})

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export const getProducts = () => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.get(PRODUCTS_URL);
            console.log(response.data.products);
            dispatch(fetchProducts(response.data.products)); // Dispatching the action
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
};
