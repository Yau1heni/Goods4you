import {createSlice} from '@reduxjs/toolkit'
import {createMainAsyncThunk} from "@/utils/create-main-async-thunk.ts";
import {cartsServices} from "@/services";
import {Cart, Nullable} from "@/types";

type CartsState = {
    carts: Nullable<Cart>;
}

const initialState: CartsState = {
    carts: null,
}

export const slice = createSlice({
    name: 'carts',
    initialState,
    reducers: {},
    selectors: {
        carts: (state) => state.carts,
        totalQuantity: (state) => state.carts?.totalQuantity || 0
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCarts.fulfilled, (state, action) => {
                if (action.payload) {
                    state.carts = action.payload;
                }
            })
    },
})

export const {reducer: cartsReducer, selectors: cartsSelectors} = slice;

export const getCarts = createMainAsyncThunk<Cart, { userId: string }>(
    'carts/Carts',
    async ({userId}, {rejectWithValue}) => {
        try {
            return await cartsServices.getCarts({userId});
        } catch (e) {
            return rejectWithValue(e);
        }
    },
);