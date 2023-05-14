import Head from 'next/head';
import ComingSoon from '@/components/ComingSoon';

export default function Home() {
  return (
    <div>
      <Head>
        <title>VastFluid</title>
      </Head>
      <ComingSoon />
    </div>
  );
}
