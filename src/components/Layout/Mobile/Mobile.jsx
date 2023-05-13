import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import Logo from '../Utils/Logo';
import Menu from '../Utils/Menu';
import Footer from '../Utils/Footer';
import CloseIcon from '@/assets/Navbar/CloseIcon.svg';

const Mobile = ({ toggleMenu, setActive, showMenu }) => {
  const [open, setOpen] = useState(true);

  const animate = useRef();
  const ctx = useRef();
  const tl = useRef();

  useEffect(() => {
    ctx.current = gsap.context(() => {
      tl.current = gsap
        .timeline({
          onReverseComplete() {
            setActive(false);
          },
        })
        .from('#navAnimate', { xPercent: -100, duration: 0.3 })
        .from('#overlay', { opacity: 0, duration: 0.5 }, '0')
        .reverse();
    }, animate);

    return () => ctx.current.revert();
  }, [setActive]);

  useEffect(() => {
    tl.current.reversed(!tl.current.reversed());
  }, [showMenu]);

  return (
    <div ref={animate} className='lg:hidden absolute w-4/5 z-50'>
      <div
        id='navAnimate'
        className='bg-gradient-to-r from-[#021946] from-4.19% to-[#050033] to-101.87% h-screen flex flex-col items-center'>
        <span className='flex items-center justify-between w-full'>
          <Logo open={open} />
          <CloseIcon onClick={toggleMenu} className='mr-4' />
        </span>
        <Menu open={open} setOpen={setOpen} toggleMenu={toggleMenu} />
        <span className='mx-4 w-full'>
          <Footer open={open} />
        </span>
      </div>
      <div id='overlay' className='background-overlay fixed inset-0 -z-20' />
    </div>
  );
};

export default Mobile;
