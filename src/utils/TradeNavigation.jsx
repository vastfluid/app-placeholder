import Link from 'next/link';
import { useRouter } from 'next/router';

const tabList = [
  ['Swap', '/swap'],
  ['Limit', '/limit'],
  ['Liquidity', '/liquidity'],
];

const TradeNavigation = () => {
  const { pathname } = useRouter();

  return (
    <div className='flex justify-between bg-TabBackground p-2 rounded-[32px] my-14 w-full sm:w-fit mx-auto'>
      {tabList.map(([tabName, href]) => (
        <Link
          key={href}
          href={href}
          className={`text-xs sm:text-sm py-1 font-medium w-full sm:w-[130px] md:w-[178px] rounded-[32px] outline-none ${
            pathname === href
              ? 'bg-TabActive text-center text-B0'
              : 'text-B70 text-center'
          }`}>
          {tabName}
        </Link>
      ))}
    </div>
  );
};

export default TradeNavigation;
