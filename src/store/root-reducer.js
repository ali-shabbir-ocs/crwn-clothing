//root reducer is a combination of multiple reducers

import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
export const rootReducer = combineReducers({
    //reducer slice and actual reducer function itself
    user: userReducer
})