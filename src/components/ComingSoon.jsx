import { useRef, useState } from 'react';
import Image from 'next/image';
import ComingImage from '../assets/ComingImage.png';
import Email from '../assets/Email.svg';
import useAnimation from '@/hooks/useAnimation';

const ComingSoon = () => {
  const [email, setEmail] = useState('');

  const homeRef = useRef();
  useAnimation(homeRef);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      alert('Email Successfully Recorded');
      setEmail('')
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <section
      ref={homeRef}
      className='px-4 overflow-y-scroll h-screen invisible-scroll'>
      <div
        id='homepage'
        className='invisible flex flex-col lg:flex-row items-center justify-center lg:h-screen lg:w-full lg:gap-12 mt-10 mb-24 lg:mb-0 lg:-mt-24 w-fit overflow-hidden'>
        <div className='text-center lg:text-left'>
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
          <form onSubmit={handleSubmit}>
            <span
              id='email'
              className='flex items-center gap-4 max-w-lg border p-2 gradient-link border-gradient mt-7'>
              <span className='items pl-3'>
                <Email />
              </span>
              <input
                type='email'
                name='entry.1106115317'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email address'
                className='items text-base flex-1 py-3 bg-transparent placeholder:text-[#71717A] focus:outline-none focus:bg-transparent'
              />
              <button
                type='submit'
                className='hidden lg:block items text-base text-[#18181B] font-semibold bg-B0 p-3'>
                NOTIFY ME
              </button>
            </span>
            <button
              type='submit'
              className='lg:hidden items text-base text-[#18181B] font-semibold bg-B0 py-3 px-5 mt-8'>
              NOTIFY ME
            </button>
          </form>
        </div>
        <Image id='illustration' src={ComingImage} alt='ComingImage' priority />
      </div>
    </section>
  );
};

export default ComingSoon;
