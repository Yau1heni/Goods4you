import { createBrowserRouter } from 'react-router-dom';
import { CartPage, ContentPage, ErrorPage, ProductPage, } from '@/pages';
import { Paths } from './paths.enum.ts';
import { ProtectedRoutes } from './protected-routes.tsx';
import { LoginPage } from '@/pages/login-page/login-page.tsx';

export const router = createBrowserRouter([
  {
    path: Paths.LOGIN,
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/',
    element: <ProtectedRoutes />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Paths.CATALOG,
        element: <ContentPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: Paths.PRODUCT,
        element: <ProductPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: Paths.CART,
        element: <CartPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
