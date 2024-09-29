import styles from './login.module.css';
import commonStyles from '@/styles/common.module.css';
import { LoginBody } from './login-body/login-body.tsx';
import { TitleSection } from '@/components';
import { clsx } from 'clsx';
import { Theme } from '@/types';

export const Login = () => {
  return (
    <section className={clsx(styles.login, commonStyles.container)}>
      <div>
        <TitleSection className={styles.title} color={Theme.DARK} title={'Sign In'} />
        <LoginBody />
      </div>
    </section>
  );
};
