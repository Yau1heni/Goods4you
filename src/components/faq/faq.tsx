import styles from './faq.module.css'
import {clsx} from "clsx";
import commonStyles from "@/styles/common.module.css";
import {TitleSection, Accordion} from "@/components";
import {faqData} from "@/mock-data/faq-data.ts";

export const Faq = () => {
    return (
        <section className={styles.faq} id="faq">
            <div className={clsx(commonStyles.container, styles.faqContent)}>
                <TitleSection title={'FAQ'}/>
                <Accordion content={faqData}/>
            </div>
        </section>
    );
};
