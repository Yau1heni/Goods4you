import { FC } from 'react';
import styles from './accordion-item.module.css';
import { clsx } from 'clsx';
import Plus from '@/assets/svg/plus.svg?react';

type AccordionItemProps = {
  id: string;
  title: string;
  text: string;
  isUnCollapsed: boolean;
  onAddItem: (id: string) => void;
};

export const AccordionItem: FC<AccordionItemProps> = (props) => {
  const { text, title, id, isUnCollapsed, onAddItem } = props;

  const onToggleHandler = () => {
    onAddItem(id);
  };

  return (
    <>
      <div className={styles.bar}></div>
      <h3 className={styles.accordeonTrigger} onClick={onToggleHandler}>
        <button
          type="button"
          aria-expanded={isUnCollapsed}
          className={styles.accordionTrigger}
          aria-controls={`accordion-content-${id}`}
          id={id}
        >
          <div className={styles.accordionTitleContainer}>
            <p className={styles.accordionTitle}>{title}</p>
            <div className={styles.svg}>
              <Plus
                aria-label={'opening control'}
                className={clsx(isUnCollapsed ? styles.rotateSvg : styles.rotateSvgDefault)}
              />
            </div>
          </div>
        </button>
      </h3>

      <div
        id={id}
        role="region"
        aria-labelledby={`accordion-content-${id}`}
        className={clsx(styles.accordionContent, isUnCollapsed && styles.open)}
      >
        {text}
      </div>
    </>
  );
};
