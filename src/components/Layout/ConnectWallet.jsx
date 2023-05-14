import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import WalletProvider from './WalletsProvider';

import { AiOutlineClose } from 'react-icons/ai';
import { TbCircleCheckFilled } from 'react-icons/tb';

const ConnectWallet = ({ walletDialog, setWalletDialog }) => {
  const [active, setActive] = useState(false);

  const handleActiveWallet = (index) => () => {
    setActive(active !== index ? index : null);
  };

  return (
    <Transition
      appear
      show={walletDialog}
      as={Fragment}
      onClose={() => setWalletDialog(false)}>
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
              <Dialog.Panel className='flex flex-col text-B0 w-full max-w-[722px] lg:min-h-[687px] transform overflow-hidden bg-gradient-to-r from-[#021946] from-4.18% to-[#050033] to-101.87% border-[3px] border-[#302D59] rounded-[32px] px-4 md:px-8 pt-8 pb-6 transition-all relative'>
                <span
                  onClick={() => setWalletDialog(false)}
                  className='text-lg absolute top-8 right-8 cursor-pointer p-1'>
                  <AiOutlineClose />
                </span>
                <div>
                  <h3 className='text-lg font-medium leading-6 cursor-pointer'>
                    Connect your wallet
                  </h3>
                  <p className='text-xs'>
                    Select a wallet from the list of supported wallets.
                  </p>
                </div>
                <div className='border-[#302D59] border my-4 md:my-8' />
                <div className='flex flex-1 flex-col justify-between'>
                  <div>
                    <h3 className='text-lg font-medium leading-6 cursor-pointer'>
                      Choose Wallet
                    </h3>
                    <div className='flex justify-center sm:justify-start flex-wrap gap-3 md:gap-5 mt-4 mb-10'>
                      {WalletProvider.map(({ title, icon }, index) => (
                        <button
                          key={index}
                          onClick={handleActiveWallet(index)}
                          className='flex flex-col items-center gap-y-3 text-base pt-4 pb-2 w-28 md:w-40 lg:w-[204px] border-2 border-[#0157FF] rounded-xl bg-gradient-to-r from-[#021946] from-4.18% to-[#050033] to-101.87% relative lg:hover:scale-105 duration-300'>
                          {icon}
                          <p className='text-xs sm:text-sm lg:text-[20px] font-medium'>
                            {title}
                          </p>
                          {active === index && (
                            <TbCircleCheckFilled className='absolute top-4 right-4 text-[#10B981]' />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                  <p className='text-xs font-medium text-center'>
                    Wallets are provided by third parties. By connecting your
                    wallet, you agree to their terms and conditions. Wallet
                    access may depend on these third parties being operational.
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ConnectWallet;
