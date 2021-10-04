import Head from 'next/head';
import Layout from '../src/components/Layout/layout';

export default function Home() {
  return (
    <div className="bg-blue-100">
    <Layout>
      <Head>
        <title>Super Apps DIKTI</title>
        <link rel="icon" type="image/png" sizes="16x16" href="logo-kemendikbud.png" />
      </Head>
    </Layout>
    </div>
  )
}
