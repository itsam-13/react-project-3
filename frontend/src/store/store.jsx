import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../store/Reducers/cartSlice'
import productSlice from '../store/Reducers/productSlice'
import userSlice from '../store/Reducers/userSlice'

export const store = configureStore({
    reducer: {
        userReducer: userSlice,
        productsReducer: productSlice,
        cartsReducer: cartSlice,
    },
})

