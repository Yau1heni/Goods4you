import { localStorageService } from '@/services';
import { LOCAL_STORAGE_KEYS } from '@/constants';
import { Paths } from './paths.enum';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes = () => {
  const accessToken = localStorageService.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);

  return accessToken ? <Outlet /> : <Navigate to={Paths.LOGIN} replace={true} />;
};
