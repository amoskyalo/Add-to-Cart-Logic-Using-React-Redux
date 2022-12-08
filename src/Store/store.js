import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Components/Cart/CartSlice";

export default configureStore({
    reducer: {
        cart: CartSlice,
    }
})