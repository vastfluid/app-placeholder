import dynamic from 'next/dynamic';
const ComingSoon = dynamic(() => import('@/components/ComingSoon'));
import Head from 'next/head';

const index = () => {
  return (
    <div>
      <Head>
        <title>VastFluid - Vest</title>
      </Head>
      <ComingSoon />
    </div>
  );
};

export default index;
