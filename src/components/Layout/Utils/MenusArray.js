import { GiFarmer } from 'react-icons/gi';
import { BsSend } from 'react-icons/bs';
import { RiDashboardLine, RiGovernmentLine } from 'react-icons/ri';
import {
  MdCurrencyExchange,
  MdMoreVert,
  MdOutlineRocketLaunch,
} from 'react-icons/md';

const Menus = [
  { id: 1, title: 'Home', href: '/', icon: <RiDashboardLine /> },
  {
    id: 2,
    title: 'Trade',
    hasLink: false,
    href: '#',
    icon: <MdCurrencyExchange />,
    submenu: true,
    submenuItems: [
      { id: 1, title: 'Swap', href: '/swap' },
      { id: 2, title: 'Limit Order', href: '/limit' },
      {
        id: 3,
        title: 'Bridge',
        href: 'https://bridge.arbitrum.io',
        external: true,
      },
    ],
  },
  {
    id: 3,
    title: 'Earn',
    hasLink: false,
    href: '#',
    icon: <GiFarmer />,
    submenu: true,
    submenuItems: [
      { id: 1, title: 'Pools', href: '/pools' },
      { id: 2, title: 'My Pools', href: '/my-pools' },
      { id: 3, title: 'Farms', href: 'farms' },
    ],
  },
  {
    id: 4,
    title: 'Governance',
    hasLink: false,
    href: '#',
    icon: <RiGovernmentLine />,
    submenu: true,
    submenuItems: [
      { id: 2, title: 'Stake', href: '/stake' },
      { id: 1, title: ' Vote', href: '/vote' },
    ],
  },
  {
    id: 5,
    title: 'VastPad',
    href: '/vastpad',
    icon: <MdOutlineRocketLaunch />,
  },
  { id: 6, title: 'VastSend', href: '/vastsend', icon: <BsSend /> },
  {
    id: 7,
    title: 'More',
    hasLink: false,
    href: '#',
    icon: <MdMoreVert />,
    submenu: true,
    submenuItems: [
      { id: 1, title: 'Audit', href: 'https://google.com', external: true },
      { id: 2, title: 'Docs', href: 'https://google.com', external: true },
      { id: 3, title: 'Chart', href: 'https://google.com', external: true },
      {
        id: 4,
        title: 'Coin Gecko',
        href: 'https://google.com',
        external: true,
      },
      {
        id: 5,
        title: 'CoinMarketCap',
        href: 'https://google.com',
        external: true,
      },
    ],
  },
];

export default Menus;
