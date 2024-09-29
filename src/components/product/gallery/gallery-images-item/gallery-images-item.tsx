import {FC} from 'react';
import styles from './gallery-images-item.module.css'
import {clsx} from "clsx";

type GalleryImagesProps = {
    image: string
    imageIndex: number
    setImage: (imageIndex: number) => void
    isActive: boolean
}

export const GalleryImagesItem: FC<GalleryImagesProps> = (props) => {
    const {image, setImage, imageIndex, isActive} = props

    const chooseImageHandler = () => {
        setImage(imageIndex)
    }

    return (
        <button className={styles.button} onClick={chooseImageHandler} aria-label={"Choose image"}>
            <img className={clsx(styles.image, isActive && styles.active)} width={70} height={70} src={image} alt="CartProduct"/>
        </button>
    );
};
