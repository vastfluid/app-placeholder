import Image from 'next/image';
import ComingImage from '../assets/ComingImage.png';
import Email from '../assets/Email.svg';
import { useRef } from 'react';
import useAnimation from '@/hooks/useAnimation';

const ComingSoon = () => {
  const homeRef = useRef();
  useAnimation(homeRef);

  return (
    <section ref={homeRef}>
      <div
        id='homepage'
        className='invisible flex items-center justify-center gap-12 h-screen -mt-24'>
        <div>
          <h1 className='text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7B48E8] from-13.54% via-[#348CF4] via-50.52% to-[#4DBAD6] to-85.94% pb-4'>
            Coming Soon!
          </h1>
          <h2 className='text-B0 text-xl font-semibold mt-2 mb-5'>
            Get notified when we launch.
          </h2>
          <h3 className='text-[#A1A1AA] text-base max-w-lg'>
            Be the first to get notified when we launch. Input your email
            address to secure a spot.
          </h3>
          <span
            id='email'
            className='flex items-center gap-4 max-w-lg border p-2 gradient-link border-gradient mt-7'>
            <span className='items pl-3'>
              <Email />
            </span>
            <input
              type='email'
              name='email'
              placeholder='Enter your email address'
              className='items text-base flex-1 py-3 bg-transparent placeholder:text-[#71717A] focus:outline-none'
            />
            <button className='items text-base text-[#18181B] font-semibold bg-B0 p-3'>
              NOTIFY ME
            </button>
          </span>
        </div>
        <Image id='illustration' src={ComingImage} alt='ComingImage' priority />
      </div>
    </section>
  );
};

export default ComingSoon;