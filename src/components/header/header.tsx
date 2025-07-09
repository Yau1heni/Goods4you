import styles from './header.module.css';
import { Link as ScrollLink } from 'react-scroll';
import commonStyles from '@/styles/common.module.css';
import { clsx } from 'clsx';
import { MainTitle } from '@/components/main-title/main-title.tsx';
import { FC } from 'react';
import { LinkWithCounter } from '@/components';
import { useAppSelector } from '@/hooks';
import { cartsSelectors } from '@/store';
import { useMeQuery } from '@/services/login-api/login-api.ts';

type HeaderProps = {
  isWithNav?: boolean;
  totalQuantity?: number;
};

export const Header: FC<HeaderProps> = (props) => {
  const { isWithNav = true } = props;
  const totalQuantity = useAppSelector(cartsSelectors.totalQuantity);

  const {data} = useMeQuery(undefined, {
    skip: !totalQuantity
  });

  return (
    <header className={styles.header}>
      <div className={clsx(commonStyles.container, styles.headerContent)}>
        <MainTitle title={'Goods4you'} />
        {isWithNav && data && (
          <nav className={styles.nav}>
            <ScrollLink tabIndex={0} className={styles.navItem} to={'catalog'} smooth spy>
              Catalog
            </ScrollLink>
            <ScrollLink tabIndex={0} className={styles.navItem} to={'faq'} smooth spy>
              FAQ
            </ScrollLink>
            <LinkWithCounter title={'Cart'} counter={totalQuantity} />
            <p>
              {data.firstName} {data.lastName}
            </p>
          </nav>
        )}
      </div>
    </header>
  );
};
