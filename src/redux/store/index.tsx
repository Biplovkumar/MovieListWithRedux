import { configureStore } from '@reduxjs/toolkit'
import appreducer from '../reducers/index'
import thunk from 'redux-thunk'
const { logger } = require('redux-logger');
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
    // timeout: null, 
    // blacklist: ['navigation', 'isLoading', 'hasErrored']
    // whitelist:['login']
  }

const persistedReducer = persistReducer(persistConfig, appreducer)


export const store = configureStore({ reducer: persistedReducer, 
                                      middleware: [thunk, logger]})
export const persistor = persistStore(store);