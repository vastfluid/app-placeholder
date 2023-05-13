import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const useScaleIn = () => {
  const animateRef = useRef();

  useEffect(() => {
    let ctx;

    ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: { opacity: 0 },
        })
        .from('#tab', { scale: 0.6, duration: 0.4, ease: 'back' }, '<');
    }, animateRef);

    return () => ctx.revert();
  }, []);

  return animateRef;
};

export default useScaleIn;
