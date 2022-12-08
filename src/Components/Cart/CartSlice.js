import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        common: [],
    },
    reducers: {
        addCart: ( state, action) =>{
            var item = action.payload;
            const existsItem = state.cart.find( cart => cart.id === item.id)
            if(!existsItem){
                state.cart.push(item);
            } else{
                state.common.push(item);
            }
        },
        removeCart: ( state, action) =>{
            const { id } = action.payload
            return state.cart.filter( cart => cart.id !== id)
        },
        filterCommon: ( state, action) =>{
            const id  = action.payload;
            return state.cart.common.filter( cart=> cart.id === id)
        }
    }
});

export default CartSlice.reducer
export const { addCart, removeCart } = CartSlice.actions;

//reusable selectors:
export const cartData = state => state.cart.cart;
export const commonData = state => state.cart.common;

