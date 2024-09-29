import {createSlice} from '@reduxjs/toolkit';

type MainState = {
    isLoading: boolean;
    isError: boolean;
}

const initialState: MainState = {
    isLoading: true,
    isError: false,
};

const slice = createSlice({
    name: 'main',
    initialState,
    reducers: {},
    selectors: {
        isLoading: (state) => state.isLoading,
        isError: (state) => state.isError,
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                (action) => action.type.endsWith('/pending'),
                (state) => {
                    state.isLoading = true;
                },
            )
            .addMatcher(
                (action) => action.type.endsWith('/fulfilled'),
                (state) => {
                    state.isLoading = false;
                    state.isError = false
                },
            )
            .addMatcher(
                (action) => action.type.endsWith('/rejected'),
                (state) => {
                    state.isLoading = false;
                    state.isError = true
                },
            );
    },
});

export const {reducer: mainReducer, selectors: mainSelectors} = slice;