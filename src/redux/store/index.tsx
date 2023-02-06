import { configureStore } from '@reduxjs/toolkit'
import appreducer from '../reducers/index'
//middleware
import thunk from 'redux-thunk'
//logger
const { logger } = require('redux-logger');
import { persistStore, persistReducer } from 'redux-persist'
//Redux also using async-storage inside.
import AsyncStorage from '@react-native-async-storage/async-storage';


//Configuration of store
const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
    // timeout: null, 
    // blacklist: ['navigation', 'isLoading', 'hasErrored']
    // whitelist:['login']
  }



  //persist data with persistReducer which got from redux-persist.
const persistedReducer = persistReducer(persistConfig, appreducer)


//creating the store with middleware/logger
export const store = configureStore({ reducer: persistedReducer, 
                                      middleware: [thunk, logger]})

//adding store in to persist.
export const persistor = persistStore(store);