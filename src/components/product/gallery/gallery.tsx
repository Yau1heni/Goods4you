import styles from './gallery.module.css'
import image from "@/assets/images/image.png";

export const Gallery = () => {
    return (
        <div className={styles.gallery}>
            <div className={styles.mainImage}>
                <img src={image} width={520} alt="Product"/>
            </div>
            <div className={styles.galleryImages}>
                <div>
                    <img width={70} height={70} src={image} alt="Product"/>
                </div>
                <div>
                    <img width={70} height={70} src={image} alt="Product"/>
                </div>
                <div>
                    <img width={70} height={70} src={image} alt="Product"/>
                </div>
                <div>
                    <img width={70} height={70} src={image} alt="Product"/>
                </div>
                <div>
                    <img width={70} height={70} src={image} alt="Product"/>
                </div>
                <div>
                    <img width={70} height={70} src={image} alt="Product"/>
                </div>
            </div>
        </div>
    );
};
