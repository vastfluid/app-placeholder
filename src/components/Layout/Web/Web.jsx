import { useState } from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import Logo from '../Utils/Logo';
import Menu from '../Utils/Menu';
import Footer from '../Utils/Footer';

const Web = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`hidden lg:flex flex-col bg-gradient-to-r from-[#021946] from-4.18% to-[#050033] to-101.87% h-screen z-50 ${
        open ? 'w-80' : 'w-20'
      } duration-300 relative`}>
      <span onClick={() => setOpen(!open)}>
        <BsArrowLeftShort
          className={`bg-white text-B900 text-lg rounded-full absolute  top-10 border border-B900 cursor-pointer duration-300 ${
            !open ? 'rotate-180 -right-2 z-50' : '-right-3'
          }`}
        />
      </span>
      <Logo open={open} />
      <Menu open={open} setOpen={setOpen} />
      <Footer open={open} setOpen={setOpen} />
    </div>
  );
};

export default Web;
