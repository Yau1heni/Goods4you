export {store} from './config/store.ts'
export type {RootState, AppDispatch} from './config/store.ts'
export {mainReducer, mainSelectors} from './slices/main-slice/main-slice.ts'
export {cartsReducer, cartsSelectors, getCarts} from './slices/carts-slice/cart-slice.ts'