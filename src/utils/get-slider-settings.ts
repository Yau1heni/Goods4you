const MAX_SLIDES_TO_SHOW = 5;

export const getSliderSettings = (elementCount: number) => {
  const slidesValue = elementCount > MAX_SLIDES_TO_SHOW ? MAX_SLIDES_TO_SHOW : elementCount;

  return {
    infinite: true,
    speed: 500,
    slidesToShow: slidesValue,
    slidesToScroll: 1,
    arrows: false,
  };
};
