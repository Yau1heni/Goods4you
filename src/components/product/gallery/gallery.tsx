import styles from './gallery.module.css';
import { FC, useState } from 'react';
import { GalleryImagesItem } from './gallery-images-item/gallery-images-item.tsx';
import Slider from 'react-slick';
import { getSliderSettings } from '@/utils/get-slider-settings.ts';

type GalleryProps = {
  image: string;
  images: string[];
};

export const Gallery: FC<GalleryProps> = (props) => {
  const { images } = props;

  const [mainImageIndex, setMainImageIndex] = useState(0);

  const settings = getSliderSettings(images.length);

  const galleryImagesList =
    images.length <= 1 ? null : (
      <Slider {...settings}>
        {images.map((image, index) => (
          <GalleryImagesItem
            imageIndex={index}
            setImage={setMainImageIndex}
            key={image}
            image={image}
            isActive={mainImageIndex === index}
          />
        ))}
      </Slider>
    );

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImage}>
        <img src={images[mainImageIndex]} width={520} alt="CartProduct" />
      </div>
      {galleryImagesList}
    </div>
  );
};
