import { configureStore } from "@reduxjs/toolkit";
import searchFilterReducer from "./slices/searchFilter.slice";
import { homesApi } from './../services/getAndSearch.home';


export const store = configureStore({
    reducer: {
        searchFilter: searchFilterReducer,
        [homesApi.reducerPath]: homesApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(homesApi.middleware),
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

