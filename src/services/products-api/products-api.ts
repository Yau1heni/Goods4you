import {createApi} from '@reduxjs/toolkit/query/react'
import {axiosBaseQuery} from "../axios-config/axios-config.ts";
import {Product, Products, UpdatedProducts} from "@/types";
import {store} from "@/store";
import {API_BASE_URL} from "@/constants";

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: axiosBaseQuery({baseUrl: API_BASE_URL}),
    tagTypes: ["Product"],
    endpoints: (builder) => ({
        getProducts: builder.query<Products<UpdatedProducts[]>, { limit: number, skip: number, q: string }>({
            query: (params) => ({
                url: 'products/search',
                params,
            }),
            serializeQueryArgs: ({endpointName}) => {
                return endpointName;
            },
            merge: (currentCache, newItems, otherArgs) => {
                if (otherArgs.arg.q === '' && otherArgs.arg.skip === 0) {
                    return newItems
                } else {
                    if (otherArgs.arg.skip === 0) {
                        return newItems
                    }
                    currentCache.products.push(...newItems.products)
                }
            },
            forceRefetch({currentArg, previousArg}) {
                return currentArg !== previousArg
            },
            transformResponse: (response: Products): Products<UpdatedProducts[]> => {
                const {carts} = store.getState().carts;

                const updatedProducts = response?.products.map(product => {
                    const cartItem = carts?.products.find(item => item.id === product.id);

                    return {
                        ...product,
                        quantity: cartItem ? cartItem.quantity : 0,
                    }
                });

                return {
                    products: updatedProducts,
                    skip: response.skip,
                    limit: response?.limit,
                    total: response.total
                };
            }
        }),

        getProduct: builder.query<Product, string>({
            query: (id) => ({url: `products/${id}`,}),
        }),

    }),
})

export const {useGetProductsQuery, useGetProductQuery} = productApi