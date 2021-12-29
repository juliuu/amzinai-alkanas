import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const SectionCardContainer = styled.div`
  display: flex;
  place-content: center;
  width: 100%;
`;

export const CardWrapper = styled(Swiper)`
  display: inline-block;
  width: ${({ width }) => `${width}px`};
  max-width: 100%;
  height: 100%;
  padding: 0.5rem 0 0.5rem 0;

  > .swiper-button-prev {
    left: 0%;
    border-radius: 0 1.8rem 1.8rem 0;
  }

  > .swiper-button-next {
    right: 0%;
    border-radius: 1.8rem 0 0 1.8rem;
  }

  > .swiper-button-next,
  .swiper-button-prev {
    --button-hueue: 0%;
    --swiper-navigation-size: 1.487rem;

    :hover {
      --button-hueue: 100%;
    }

    background: hsl(39, var(--button-hueue), 89%);
    width: 1.8rem;
    height: 3.944rem;
    color: orange;
    justify-content: center;
  }
`;
