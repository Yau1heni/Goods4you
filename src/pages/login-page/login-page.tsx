import { Header, Login } from '@/components';
import { useEffect } from 'react';

export const LoginPage = () => {
  useEffect(() => {
    document.title = 'Sign in | Goods4you';
  }, []);

  return (
    <div>
      <Header isWithNav={false} />
      <Login />
    </div>
  );
};
