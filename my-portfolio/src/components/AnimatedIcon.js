import React from 'react';
import { useSpring, animated } from 'react-spring';

function AnimatedIcon({ children }) {
  const styles = useSpring({
    from: { transform: 'scale(0)' },
    to: { transform: 'scale(1)' },
    config: { tension: 150, friction: 10 }
  });

  return <animated.div style={styles}>{children}</animated.div>;
}

export default AnimatedIcon;
