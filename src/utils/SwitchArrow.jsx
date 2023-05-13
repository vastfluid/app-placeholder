import { useState } from 'react';
import { RiArrowUpDownFill } from 'react-icons/ri';
import { HiArrowNarrowDown } from 'react-icons/hi';

const SwitchArrow = ({ mt }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative mx-auto text-B50 bg-[#2B2E44] w-9 h-9 rounded-full mt-4 mb-2 cursor-pointer`}>
      <HiArrowNarrowDown
        className={`p-2 absolute top-0 left-0 w-full h-full transition-all ease-in-out duration-300 ${
          isHovered ? 'opacity-0 scale-50' : 'opacity-100 scale-100'
        }`}
      />
      <RiArrowUpDownFill
        className={`p-2 absolute top-0 left-0 w-full h-full transition-all ease-in-out duration-300 ${
          isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
      />
    </div>
  );
};

export default SwitchArrow;
