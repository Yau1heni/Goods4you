import {isRejectedWithValue} from '@reduxjs/toolkit'
import type {Middleware} from '@reduxjs/toolkit'
import {toast} from "react-toastify";
import {ERROR_MESSAGE, TOAST_ID} from "@/constants";

export const rtkQueryErrorLogger: Middleware =
    () => (next) => (action) => {
        if (isRejectedWithValue(action)) {
            /*const error = 'data' in action.error
                ? (action.error.data as { message: string }).message
                : action.error.message*/

            toast.error(ERROR_MESSAGE, {
                toastId: TOAST_ID
            })
        }

        return next(action)
    }