import Head from 'next/head';
import { Document } from 'prismic-javascript/types/documents';
import PrismicDOM from 'prismic-dom';
import { GetStaticProps } from 'next';

import { client } from '@/lib/prismic';

import Layout from '@/components/Layout';
import Box from '@/components/Box';

interface IMain {
  main: Document;
}

export default function Home({ main }: IMain ) {
  return (
    <Layout 
      instagram={main.data.instagram.url} 
      facebook={main.data.facebook.url} 
      linkedin={main.data.linkedin.url}>
      <Head>
        <title>{PrismicDOM.RichText.asText(main.data.title)} | CV</title>
      </Head>
        <Box width={50}>
          <div className="section">
            <div className="image">
              <img src={main.data.photo.url} />
            </div>
            <div className="header">
              <h1>{PrismicDOM.RichText.asText(main.data.title)}</h1>
              <span>Curriculum Vitae</span>
            </div>
          </div>
        </Box>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const mainInfo = await client().getSingle('main', null);

  return {
    props: {
      main: mainInfo,
    },
    revalidate: 60,
  }
}


