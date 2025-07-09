import { router } from '@/pages';
import { useLazyMeQuery } from '@/services/login-api/login-api.ts';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { cartsSelectors, getCarts } from '@/store';
import { localStorageService } from '@/services';
import { LOCAL_STORAGE_KEYS } from '@/constants';
import { useEffect } from 'react';
import {  RouterProvider } from 'react-router-dom';

export const App = () => {
  const [me] = useLazyMeQuery();

  const dispatch = useAppDispatch();
  const totalQuantity = useAppSelector(cartsSelectors.totalQuantity);

  const accessToken = localStorageService.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);

  useEffect(() => {
    if (accessToken) {
      me()
        .unwrap()
        .then((value) => {
          if (!totalQuantity) {
            dispatch(getCarts({ userId: value.id }));
          }
        });
    }
  }, [dispatch, totalQuantity, accessToken, me]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
