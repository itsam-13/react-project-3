import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
}

const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        loadCart: (state, action) => {
            state.carts = action.payload
        },
    }
})

export const { loadCart } = cartSlice.actions;
export default cartSlice.reducer;