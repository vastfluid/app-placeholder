import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useRouter } from 'next/router';
import Menus from './MenusArray';
import { BsChevronDown } from 'react-icons/bs';
import Link from 'next/link';

const Menu = ({ open, toggleMenu }) => {
  const { pathname } = useRouter();
  const [submenuOpenArray, setSubmenuOpenArray] = useState(
    Array(Menus.length).fill(false)
  );
  const [isRotated, setIsRotated] = useState(Array(Menus.length).fill(false));

  const submenuRefs = useRef([]);

  const handleSubmenuClick = (index, id) => {
    setSubmenuOpenArray((prevArray) =>
      prevArray.map((isOpen, idx) => (idx === index ? !isOpen : isOpen))
    );

    // toggle rotation
    setIsRotated((prevArray) =>
      prevArray.map((rotated, idx) => (idx === index ? !rotated : rotated))
    );
  };

  const animateSubmenu = (element, show) => {
    gsap.to(element, {
      height: show ? 'auto' : 0,
      opacity: show ? 1 : 0,
      duration: 0.3,
      ease: 'power1.inOut',
      overwrite: true,
    });
  };

  useEffect(() => {
    submenuOpenArray.forEach((isOpen, index) => {
      if (submenuRefs.current[index]) {
        animateSubmenu(submenuRefs.current[index], isOpen);
      }
    });
  }, [submenuOpenArray]);

  return (
    <div className='w-full overflow-y-scroll overflow-hidden flex-1 pl-4 pr-4 lg:pl-5 my-4 mr-0.5'>
      <ul>
        {Menus.map(
          ({ id, title, href, icon, submenu, submenuItems }, index) => {
            const isActive =
              href === pathname ||
              (submenuItems &&
                submenuItems.some((item) => pathname.startsWith(item.href)));

            return (
              <span key={id}>
                <Link
                  href={href}
                  onClick={!submenuItems && toggleMenu}
                  className={`${
                    isActive ? 'bg-Primary' : ''
                  } text-B0 text-sm flex justify-center items-center lg:hover:bg-PrimaryHover cursor-pointer mt-3 rounded-md transition-all ease-in-out duration-300`}>
                  <span
                    onClick={() => handleSubmenuClick(index)}
                    className='text-lg px-3 py-2 block float-left'>
                    {icon}
                  </span>
                  <span
                    onClick={() => handleSubmenuClick(index)}
                    className={`text-sm flex-1 duration-200 py-2 ${
                      !open && 'hidden'
                    }`}>
                    {title}
                  </span>
                  {submenu && open && (
                    <BsChevronDown
                      onClick={() => handleSubmenuClick(index)}
                      className={`duration-500 mr-2 transform ${
                        isRotated[index] ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </Link>
                {submenu && submenuOpenArray[index] && open && (
                  <ul
                    ref={(el) => (submenuRefs.current[index] = el)}
                    className={`border-[#514F76] opacity-0 h-0 border-l ml-6`}>
                    {submenuItems.map(({ id, title, href, external }) => (
                      <Link key={id} href={href} legacyBehavior>
                        <a
                          onClick={toggleMenu}
                          target={external ? '_blank' : undefined}
                          rel={external ? 'noopener noreferrer' : undefined}
                          className='text-B0 text-sm flex items-center cursor-pointer p-2 mt- ml-4 lg:hover:bg-PrimaryHover rounded-md'>
                          {title}
                        </a>
                      </Link>
                    ))}
                  </ul>
                )}
              </span>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default Menu;
