import Head from 'next/head'
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1 className="text-purple-500">First Post</h1>
      </Layout>
    </>
  );
}

