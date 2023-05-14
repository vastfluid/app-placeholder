import { useEffect } from 'react';
import gsap from 'gsap';

const useAnimation = (ref) => {
  useEffect(() => {
    let ctx;

    ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { opacity: 0, duration: 0.7 } })
        .from('#homepage', { ease: 'linear', autoAlpha: 0, duration: 0.5 })
        .from('h1', { y: -100, ease: 'back' }, '<0.2')
        .from('h2', { x: -200, ease: 'back' }, '<0.3')
        .from('h3', { x: 200, ease: 'back' }, '<')
        .from('#email', { y: 200, ease: 'bounce' }, '<0.2')
        .from(
          '.items',
          {
            scale: 0,
            stagger: 0.1,
            transformOrigin: '50% 50%',
            ease: 'back',
            duration: 0.5,
          },
          '<0.3'
        )
        .from(
          '#illustration',
          { scale: 0, stagger: 0.1, ease: 'back', duration: 0.5, }, '<0.4'
        );

      gsap
        .timeline({ defaults: { opacity: 0, duration: 1 } })
        
    }, ref);

    return () => ctx && ctx.revert();
  }, [ref]);
};

export default useAnimation;
