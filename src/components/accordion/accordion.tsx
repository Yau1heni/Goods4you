import { FC, useState } from 'react';
import styles from './accordion.module.css';
import { AccordionItem } from './accordion-item/accordion-item.tsx';

type AccordionItem = {
  id: string;
  title: string;
  text: string;
};

type AccordionProps = {
  content: AccordionItem[];
};

export const Accordion: FC<AccordionProps> = (props) => {
  const { content } = props;

  const [unCollapsedItemIndexes, setUnCollapsedItemIndexes] = useState(['1']);

  const onAddItemHandler = (id: string) => {
    if (unCollapsedItemIndexes.includes(id)) {
      setUnCollapsedItemIndexes(unCollapsedItemIndexes.filter((itemId) => itemId !== id));
    } else {
      setUnCollapsedItemIndexes([...unCollapsedItemIndexes, id]);
    }
  };

  const accordionList = content.map(({ id, title, text }) => (
    <AccordionItem
      onAddItem={onAddItemHandler}
      key={id}
      isUnCollapsed={unCollapsedItemIndexes.includes(id)}
      id={id}
      text={text}
      title={title}
    />
  ));

  return (
    <div className={styles.accordion}>
      <div className={styles.bar}></div>
      {accordionList}
      <div className={styles.bar}></div>
    </div>
  );
};
