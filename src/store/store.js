// //file where all redux code lives and all actions are received here
// //and dispatch them into reducers to update the state

// import { compose, createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
// //logger is beneficial as it tells what is the state before the action is dispatched
// //and what after the action is state
// import { rootReducer } from './root-reducer';

// const middleWares = [logger];
// //middleware are like library helpers that run before an action hits the reducer
// //they are something like enhancers

// const composedEnhances = compose(applyMiddleware(...middleWares));

// export const store = createStore(rootReducer, undefined, composedEnhances);


import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';


// Only include logger in development mode to reduce memory consumption
const middleWares = [];

if (process.env.NODE_ENV === 'development') {
    middleWares.push(logger);
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            // Disable immutable state check for performance or debugging purposes
            immutableCheck: false,  // This disables immutableStateInvariantMiddleware
            serializableCheck: false, // Disables serializableStateInvariantMiddleware if needed
        }).concat(middleWares),
});

