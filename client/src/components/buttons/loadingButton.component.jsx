import React from 'react';
import { AnimateSharedLayout, motion } from 'framer-motion';

import { MotionButton, LoadingWrapper, LoadingBall } from './button.styles';

const LoadingButton = ({ value, valueConfirmed, type, disabled, formSent = 'pending' }) => {
  const transitionDuration = 0.2;

  const loadingWrapperVariants = {
    initial: {
      // TODO: initial={false} -- won't use this in replacement animations
      // TODO: button is "jumping" when transitioning between animations../
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
    animate: {
      opacity: 1,
      transition: {
        duration: transitionDuration,
        staggerChildren: 0.1,
      },
    },
  };

  const textVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: transitionDuration,
      },
    },
  };

  const loadingBubbleVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: [4, -4],
    },
  };

  const bubbleTransition = {
    repeat: Infinity,
    repeatType: 'reverse',
    duration: 0.4,
  };

  return (
    <AnimateSharedLayout>
      <MotionButton layout disabled={disabled} type={type} transition={{ duration: transitionDuration }}>
        {formSent === 'pending' && (
          <motion.p variants={textVariants} initial={false} animate="animate">
            {value}
          </motion.p>
        )}
        {formSent === 'loading' && (
          <LoadingWrapper variants={loadingWrapperVariants} initial="initial" animate="animate">
            {[1, 2, 3].map((key) => (
              <LoadingBall key={key} variants={loadingBubbleVariants} transition={bubbleTransition} />
            ))}
          </LoadingWrapper>
        )}
        {formSent === 'confirmed' && (
          <>
            {valueConfirmed}
            <span style={{ paddingLeft: '1rem' }}> &#10003;</span>
          </>
        )}
      </MotionButton>
    </AnimateSharedLayout>
  );
};

export default LoadingButton;
