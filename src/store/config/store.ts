import {configureStore} from '@reduxjs/toolkit'
import {mainReducer} from "../slices/main-slice/main-slice.ts";
import {cartsReducer} from "../slices/carts-slice/cart-slice.ts";
import {loginApi, productApi} from "@/services";
import {rtkQueryErrorLogger} from "./middlewares/middlewares.ts";

export const store = configureStore({
    reducer: {
        main: mainReducer,
        carts: cartsReducer,
        [productApi.reducerPath]: productApi.reducer,
        [loginApi.reducerPath]: loginApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware, loginApi.middleware, rtkQueryErrorLogger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch