import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const withAnimation = (WrappedComponent, animationClass) => {
  return (props) => {
    const { ref, inView } = useInView({
      triggerOnce: true, // Animation will trigger only once when it comes into view
      threshold: 0.1, // Adjust based on when you want the animation to trigger
    });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      if (inView) {
        setIsVisible(true);
      }
    }, [inView]);

    return (
      <div ref={ref} className={isVisible ? `animate__animated ${animationClass}` : ''}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withAnimation;
