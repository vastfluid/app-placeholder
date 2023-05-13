import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { BsSearch } from 'react-icons/bs';
import ETHLogo from '@/assets/Trade/ETHLogo.svg';
import TokenList from '../components/Swap/TokenList';

const SelectToken = ({ selectTokenDialog, setSelectTokenDialog }) => {
  return (
    <Transition
      appear
      show={selectTokenDialog}
      as={Fragment}
      onClose={() => setSelectTokenDialog(false)}>
      <Dialog as='div' className='relative z-50'>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-[#050033] bg-opacity-70' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex h-full justify-center px-4'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'>
              <Dialog.Panel className='w-full max-w-[490px] my-16 py-10 px-6 transform bg-gradient-to-r from-[#021946] from-4.18% to-[#050033] to-101.87% border-[3px] border-[#302D59] rounded-[32px] transition-all'>
                <div className='flex items-center rounded-xl bg-[#0F161C] py-3 px-4'>
                  <BsSearch className='text-B700 text-lg block float-left cursor-pointer duration-300' />
                  <input
                    type='search'
                    placeholder='Search by name or address'
                    className='text-sm tracking-wider font-medium bg-transparent w-full pl-4 cursor-pointer text-B0 placeholder:text-B700/50 focus:outline-none'
                  />
                </div>
                <div className='flex flex-wrap gap-2 mt-4 md:mt-6'>
                  {['VFT', 'ETH', 'USDT', 'ZKS', 'BTC', 'GMT'].map((token) => (
                    <span
                      key={token}
                      className='text-B0 text-[14px] md:text-sm font-medium flex items-center gap-2.5 p-2 w-fit bg-[#001A4D] border border-[#062A73] rounded-lg cursor-pointer'>
                      <ETHLogo /> {token}
                    </span>
                  ))}
                </div>

                <div className='border-[#302D59] border mt-5' />

                <table className='text-B0 w-full'>
                  <thead>
                    <tr className='text-base font-medium h-12 flex items-center w-full'>
                      <th className='flex-1 text-left'>Token</th>
                      <th className='flex-1 text-right'>Balance</th>
                      <th className='flex-1 text-right'>Value</th>
                    </tr>
                  </thead>
                  <tbody className='overflow-y-auto max-h-[calc(100vh-30rem)] sm:max-h-[calc(100vh-27rem)] block pr-2 -mr-4'>
                    {TokenList.map(
                      ({ title, symbol, balance, total, logo }, index) => (
                        <tr
                          key={index}
                          className='text-[12px] md:text-[14px] flex items-center'>
                          <td className='flex flex-1 items-center gap-3 text-left my-1.5'>
                            {logo}
                            <span className='flex flex-col'>
                              <span className='text-[#FEFEFE] lg:text-[16px] -mb-1'>
                                {title}
                              </span>
                              <span className='text-[12px] text-[#BABABA]'>
                                {symbol}
                              </span>
                            </span>
                          </td>
                          <td className='flex-1 text-right'>
                            {balance} {symbol}
                          </td>
                          <td className='flex-1 text-right'>${total}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SelectToken;
