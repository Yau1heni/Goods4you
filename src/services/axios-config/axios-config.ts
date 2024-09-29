import axios from 'axios';
import type {BaseQueryFn} from '@reduxjs/toolkit/query'
import type {AxiosRequestConfig, AxiosError} from 'axios'
import {API_BASE_URL, LOCAL_STORAGE_KEYS} from "@/constants";
import {localStorageService} from "@/services";
import {StatusCode} from "@/types";

export const instance = axios.create({
    baseURL: API_BASE_URL,
});

instance.interceptors.request.use(async (config) => {
    const accessToken = localStorageService.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN)

    if (accessToken !== null) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
});

export const axiosBaseQuery =
    (
        {baseUrl}: { baseUrl: string } = {baseUrl: ''}
    ): BaseQueryFn<
        {
            url: string
            method?: AxiosRequestConfig['method']
            data?: AxiosRequestConfig['data']
            params?: AxiosRequestConfig['params']
            headers?: AxiosRequestConfig['headers']
        },
        unknown,
        unknown
    > =>
        async ({url, method, data, params, headers}) => {
            try {
                const result = await instance({
                    url: baseUrl + url,
                    method,
                    data,
                    params,
                    headers,
                })

                return {data: result.data}
            } catch (axiosError) {
                const err = axiosError as AxiosError

                if (err.status === StatusCode.UNAUTHORIZED) {
                    localStorageService.removeItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN)
                }

                return {
                    error: {
                        status: err.response?.status,
                        data: err.response?.data || err.message,
                    },
                }
            }
        }
