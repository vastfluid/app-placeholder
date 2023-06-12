import Head from 'next/head';
import dynamic from 'next/dynamic'
const ComingSoon = dynamic(() => import('@/components/ComingSoon'));

const index = () => {
  return (
    <div>
      <Head>
        <title>VastFluid - Farms</title>
      </Head>
      <ComingSoon />
    </div>
  );
};

export default index;
