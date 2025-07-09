import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createMainAsyncThunk } from '@/utils/create-main-async-thunk.ts';
import { cartsServices } from '@/services';
import { Cart, CartProduct, Nullable, UpdateMode } from '@/types';

type CartsState = {
  carts: Nullable<Cart>;
  drafts: CartProduct[];
};

export const initialState: CartsState = {
  carts: null,
  drafts: [],
};

export const slice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    increaseProduct(state, action: PayloadAction<{ id: number }>) {
      if (state.carts !== null) {
        const index = state.carts.products.findIndex((product) => product.id === action.payload.id);
        state.carts.products[index].quantity++;
      }
    },
    decreaseProduct(state, action: PayloadAction<{ id: number }>) {
      if (state.carts !== null) {
        const index = state.carts.products.findIndex((product) => product.id === action.payload.id);
        state.carts.products[index].quantity--;
      }
    },
    addProduct(state, action: PayloadAction<{ product: CartProduct; isFromDraft?: boolean }>) {
      if (state.carts !== null) {
        state.carts.products.push(action.payload.product);
      }

      if (state.carts !== null && action.payload.isFromDraft) {
        const index = state.drafts.findIndex((product) => product.id === action.payload.product.id);
        state.drafts.splice(index, 1);
      }
    },
    deleteProduct(state, action: PayloadAction<{ id: number }>) {
      if (state.carts !== null) {
        const index = state.carts.products.findIndex((product) => product.id === action.payload.id);
        state.drafts.push(state.carts.products[index]);
        state.carts.products.splice(index, 1);
      }
    },
  },
  selectors: {
    carts: (state) => state.carts,
    drafts: (state) => state.drafts,
    totalQuantity: (state) => state.carts?.totalQuantity || 0,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCarts.fulfilled, (state, action) => {
        if (action.payload) {
          state.carts = action.payload;
        }
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        if (action.payload) {
          state.carts = action.payload;
        }
      })
      .addCase(addProductToCart.fulfilled, (state, action) => {
        if (action.payload) {
          state.carts = action.payload;
        }
      });
  },
});

export const { reducer: cartsReducer, selectors: cartsSelectors, actions: cartsActions } = slice;

export const getCarts = createMainAsyncThunk<Cart, { userId: number }>(
  'getCarts/Carts',
  async ({ userId }, { rejectWithValue }) => {
    try {
      return await cartsServices.getCarts({ userId });
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const updateCart = createMainAsyncThunk<Cart, { id: number; updateMode: UpdateMode }>(
  'updateCart/Carts',
  async (data, { rejectWithValue, dispatch, getState }) => {
    try {
      switch (data.updateMode) {
        case UpdateMode.INCREASE:
          dispatch(cartsActions.increaseProduct({ id: data.id }));
          break;
        case UpdateMode.DECREASE:
          dispatch(cartsActions.decreaseProduct({ id: data.id }));
          break;
        default:
          dispatch(cartsActions.deleteProduct({ id: data.id }));
      }

      const { carts } = getState().carts;
      const { products, id } = carts as Cart;

      return await cartsServices.updateCart({ id, products });
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const addProductToCart = createMainAsyncThunk<
  Cart,
  { product: CartProduct; isFromDraft?: boolean }
>(
  'addProductToCart/Carts',
  async ({ product, isFromDraft = false }, { rejectWithValue, dispatch, getState }) => {
    try {
      dispatch(cartsActions.addProduct({ product, isFromDraft }));
      console.log(getState(), 'getState()');

      const { carts } = getState().carts;
      const { products, id } = carts as Cart;

      return await cartsServices.updateCart({ id, products });
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
