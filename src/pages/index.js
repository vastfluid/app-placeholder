import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>VastFluid</title>
      </Head>
      <h3 className='text-2xl font-semibold flex items-center justify-center h-screen text-center -mt-16'>
        Our DEX is currently under development. Stay tuned for updates!
      </h3>
    </div>
  );
}
