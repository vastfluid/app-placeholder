import LogoWhite from '@/assets/Footer/VFTLogoWhite.svg';
import Discord from '@/assets/Footer/Discord.svg';
import Twitter from '@/assets/Footer/Twitter.svg';
import Medium from '@/assets/Footer/Medium.svg';

const Footer = ({ open, setOpen }) => {
  return (
    <div
      className={`text-B0 flex items-center justify-between pt-8 pb-6 border-[#514F76] border-t-2 ${
        open && 'mx-4'
      }`}>
      <div className='flex gap-2'>
        <div
          className={`duration-500 cursor-pointer ${
            !open && 'mx-6 scale-125 hover:scale-150'
          }`}>
          <LogoWhite onClick={() => setOpen(true)} />
        </div>
        <span className={`duration-200 ${!open && 'scale-0'}`}>$1.452</span>
      </div>
      <span
        className={`flex gap-2 duration-100 cursor-pointer ${
          !open && 'scale-0'
        }`}>
        <a
          href='http://twitter.com/vastfluid'
          target='_blank'
          rel='noopener noreferrer'>
          <Twitter />
        </a>
        <a
          href='https://discord.gg/EQd4cGjzsk'
          target='_blank'
          rel='noopener noreferrer'>
          <Discord />
        </a>
        <a
          href='https://vastfluid.medium.com/'
          target='_blank'
          rel='noopener noreferrer'>
          <Medium />
        </a>
      </span>
    </div>
  );
};

export default Footer;
