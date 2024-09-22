import {AppDispatch, RootState} from "@/store";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const createMainAsyncThunk = createAsyncThunk.withTypes<{
    state: RootState
    dispatch: AppDispatch
    rejectValue: unknown;
    extra?: unknown;
}>()