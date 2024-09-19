//root reducer is a combination of multiple reducers

import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import { categoriesReducer } from "./categories/categoryReducer";
import { cartReducer } from "./cart/cartReducer";
export const rootReducer = combineReducers({
    //reducer slice and actual reducer function itself
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer,
})