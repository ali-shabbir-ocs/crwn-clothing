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
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

// Only include logger in development mode to reduce memory consumption
const middleWares = [];

if (process.env.NODE_ENV === 'development') {
    middleWares.push(logger);
}

// Persist configuration
const persistConfig = {
    key: 'root',  // Key for localStorage or sessionStorage
    storage,      // Default storage (localStorage for web)
}

// Create persisted reducer using persistConfig and rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store
export const store = configureStore({
    reducer: persistedReducer,  // Use the persisted reducer instead of rootReducer
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            // Disable immutable state and serializable checks if needed
            immutableCheck: false,
            serializableCheck: false,
        }).concat(middleWares),
});

// Create the persistor object for persisting the store
export const persistor = persistStore(store);
