import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import contactsReducer from "./contacts/slice.contacts";
import filterReducer from "./filter/reducer.filter";
import authReducer from "./auth/slice.auth";

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistedReducer,
  },
  devTools: process.env.NODE_ENV === 'development',

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
