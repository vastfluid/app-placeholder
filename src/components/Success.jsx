import { Fragment } from 'react';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import Email from '../assets/Email.png';
import Discord from '../assets/Discord.svg';
import VastFluidLogo from '../assets/VastFluidLogo.svg';

const Success = ({ showSuccess, setShowSuccess }) => {
  return (
    <Transition
      appear
      show={showSuccess}
      as={Fragment}
      onClose={() => setShowSuccess(false)}>
      <Dialog as='div' className='relative z-50'>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-[#050033] bg-opacity-60' />
        </Transition.Child>

        <div className='fixed inset-0 lg:overflow-y-auto mx-4'>
          <div className='flex min-h-full items-center justify-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'>
              <Dialog.Panel className='flex flex-col items-center text-B0 w-full max-w-[722px] transform overflow-hidden bg-gradient-to-r from-[#021946] from-4.18% to-[#050033] to-101.87% border-[3px] border-[#302D59] rounded-[32px] px-4 py-6 md:py-8 transition-all '>
                <Image
                  src={Email}
                  alt='Email Icon'
                  className='w-24 h-24 lg:w-44 lg:h-44'
                />
                <div className='bg-[#302D59] h-0.5 mt-4 md:mt-10 mb-4 w-full max-w-[550px]' />
                <p className='text-[#1ABC9C] text-center text-xl md:text-2xl font-medium '>
                  Thank you for subcsribing!
                </p>
                <p className='mt-2 mb-8 text-[#DBDBDB] text-center md:text-base max-w-[540px]'>
                  Thank you for subscribing. Be rest assured you will be part of
                  the very first people to be notified when we launch.
                </p>
                <span className='flex flex-col lg:flex-row gap-8 lg:gap-20'>
                  <a
                    href='https://discord.gg/EQd4cGjzsk'
                    target='_blank'
                    rel='noopener noreferrer'
                    onClick={() => setShowSuccess(false)}
                    className='py-5 px-10 text-sm font-medium text-Secondary hover:text-white border-Secondary hover:bg-Secondary border rounded-lg flex gap-3 items-center transition-all ease-in-out duration-300'>
                    <Discord />
                    Join Community
                  </a>
                  <Link
                    href='/'
                    onClick={() => setShowSuccess(false)}
                    className='py-5 px-10 text-sm text-center font-medium bg-Primary hover:bg-PrimaryHover rounded-lg flex gap-3 transition-all ease-in-out duration-300'>
                    Back to Dashboard
                  </Link>
                </span>
                <VastFluidLogo className='mt-12 md:mt-16' />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Success;
