import React, { useRef, useEffect, useState } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import { SectionCardContainer, CardWrapper } from './sectionCardCarousel.styles';
import { SectionCard } from '..';

import { toDate } from '../../utils';

SwiperCore.use([Navigation]);

const __calcSwiperWidth = (ref, setSlideCount, setSwiperWidth, setNavigation, setSpaceBetween) => {
  let cardSize = 387;
  let spaceBetween = 38;
  if (window.innerWidth <= 700) {
    cardSize = 278;
    spaceBetween = 20;
  }
  let initialOffset = ref.current.offsetWidth - cardSize;
  let length = 1;
  length += Math.floor(initialOffset / (cardSize + spaceBetween));

  setSlideCount(length);
  setSpaceBetween(spaceBetween);
  setSwiperWidth(length * cardSize + spaceBetween * (length - 1));
  setNavigation(length > 1 ? true : false);
};

const SectionCardCarousel = (props) => {
  const { data, linkTo, linkText } = props;
  const ref = useRef(null);

  const [slideCount, setSlideCount] = useState(3);
  const [swiperWidth, setSwiperWidth] = useState(0);
  const [spaceBetween, setSpaceBetween] = useState(0);

  const [navigation, setNavigation] = useState(false);

  const resizeHandler = () => {
    if (ref) __calcSwiperWidth(ref, setSlideCount, setSwiperWidth, setNavigation, setSpaceBetween);
  };

  useEffect(() => {
    if (ref) {
      __calcSwiperWidth(ref, setSlideCount, setSwiperWidth, setNavigation, setSpaceBetween);
      window.addEventListener('resize', resizeHandler);
    }

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <SectionCardContainer ref={ref}>
      <CardWrapper
        width={swiperWidth}
        grabCursor={true}
        spaceBetween={spaceBetween}
        slidesPerView={slideCount}
        slidesPerGroup={slideCount}
        navigation={navigation}
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item._id}>
              <SectionCard
                imgUrl={item.imgUrl}
                heading={item.heading}
                intro={item.intro}
                rating={item.rating}
                to={linkTo}
                linkText={linkText}
                timestamp={toDate(item.timestamp)}
              />
            </SwiperSlide>
          );
        })}
      </CardWrapper>
    </SectionCardContainer>
  );
};

export default SectionCardCarousel;
