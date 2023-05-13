import VastFluid from '@/assets/LogoNoText.svg';

const Logo = ({ open }) => {
  return (
    <div className='pl-4 pt-4 lg:px-5 lg:pt-8'>
      <div className='inline-flex items-center'>
        <VastFluid
          className={`cursor-pointer block float-left mr-2 duration-500 ${
            open && 'rotate-[360deg]'
          }`}
        />
        <h1
          className={`text-B0 font-Archivo font-medium text-base duration-300 ${
            !open && 'scale-0'
          }`}>
          VastFluid
        </h1>
      </div>
    </div>
  );
};

export default Logo;
