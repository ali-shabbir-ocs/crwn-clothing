import { USER_ACTION_TYPES } from "./userTypes";

const INITIAL_STATE = {
    currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {//as here we have not using reducer hook so we have to assign initial value to state
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return { ...state, currentUser: payload };
        default:
            return state;//as not necessary that every reducer call so we have to return the same initial value and re-render not occur bcz no changes occur
    }
}