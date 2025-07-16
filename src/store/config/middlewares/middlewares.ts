import type { Middleware } from '@reduxjs/toolkit';
import { isRejectedWithValue } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ERROR_MESSAGE, LOCAL_STORAGE_KEYS, TOAST_ID } from '@/constants';
import { localStorageService } from '@/services';
import { StatusCode } from '@/types';


export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    if ((action.payload as { status?: number })?.status === StatusCode.UNAUTHORIZED) {
      localStorageService.removeItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
    }
    toast.error(ERROR_MESSAGE, {
      toastId: TOAST_ID,
    });
  }

  return next(action);
};
