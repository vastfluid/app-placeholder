import { useState } from 'react';
import { useRouter } from 'next/router';
import Mobile from './Mobile/Mobile';
import MenuIcon from '@/assets/Navbar/MenuIcon.svg';
import Web from './Web/Web';
import Background from '@/assets/Background.svg';
import ConnectWallet from './ConnectWallet';

const Layout = (props) => {
  const [active, setActive] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [walletDialog, setWalletDialog] = useState(false);

  const toggleMenu = () => {
    showMenu && setActive(true);
    setShowMenu((prev) => !prev);
  };

  const RouteGroup = ({ routes, label }) => {
    const { pathname } = useRouter();

    return routes.some((route) => pathname.startsWith(route)) ? (
      <p className='hidden lg:block text-xl font-medium pl-4 duration-300 float-left'>
        {label}
      </p>
    ) : null;
  };

  return (
    <section className='relative overflow-hidden'>
      <div className='flex bg-gradient-to-r from-[#021946] from-4.18% to-[#050033] to-101.87% relative'>
        {active && (
          <Mobile
            showMenu={showMenu}
            active={active}
            setActive={setActive}
            toggleMenu={toggleMenu}
          />
        )}
        <Web />
        <div className='w-full text-white h-screen z-30 relative'>
          <div className='bg-gradient-to-r from-[#021946] from-4.18% to-[#050033] to-101.87% flex lg:block justify-between items-center py-2.5 lg:pt-4 px-4 border-b lg:border-none border-[#3B3B3B] lg:bg-none overflow-hidden'>
            <MenuIcon onClick={toggleMenu} className='lg:hidden' />
            <RouteGroup
              routes={['/swap', '/limit', '/liquidity']}
              label='Trade'
            />
            <RouteGroup
              routes={['/vote', '/bribe', '/rewards']}
              label='Governance'
            />
            <button
              onClick={() => {
                setWalletDialog(true);
              }}
              className='bg-Primary text-xs font-medium float-right border border-[#486284] rounded-lg py-3 px-5 tracking-wider'>
              Connect Wallet
            </button>
          </div>
          <section>{props.children}</section>
        </div>
      </div>
      <Background className='absolute top-0' />
      <ConnectWallet
        walletDialog={walletDialog}
        setWalletDialog={setWalletDialog}
      />
    </section>
  );
};

export default Layout;
