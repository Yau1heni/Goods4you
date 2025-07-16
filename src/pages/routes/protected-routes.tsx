import { localStorageService } from '@/services';
import { LOCAL_STORAGE_KEYS } from '@/constants';
import { Paths } from './paths.enum';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useLazyMeQuery } from '@/services/login-api/login-api.ts';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { cartsSelectors, getCarts } from '@/store';
import { useEffect } from 'react';

export const ProtectedRoutes = () => {
  const [me] = useLazyMeQuery();
  const location = useLocation();
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

  return accessToken ? <Outlet /> : <Navigate to={Paths.LOGIN} replace={true} state={{ from: location }} />;
};
