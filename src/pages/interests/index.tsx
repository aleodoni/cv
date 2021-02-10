import Head from 'next/head'
import { Document } from 'prismic-javascript/types/documents';
import { GetStaticProps } from 'next';
import PrismicDOM from 'prismic-dom';
import ReactHtmlParser from 'react-html-parser';

import Layout from '@/components/Layout';

import Box from '@/components/Box';

import { client } from '@/lib/prismic';

import { Container, Interest } from '@/styles/pages/interests/styles';

interface IInterests {
  interests: Document; 
  main: Document;
}

export default function Interests({ interests, main }: IInterests) {
  return (
    <Layout
      instagram={main.data.instagram.url} 
      facebook={main.data.facebook.url} 
      linkedin={main.data.linkedin.url}>
      <Head>
        <title>{PrismicDOM.RichText.asText(main.data.title)} | Interests</title>
      </Head>
      <div className="section">
        <Container>
          <h1>Interesses</h1>
          <Box width={100}>
            <Interest>
              <span>{ReactHtmlParser(PrismicDOM.RichText.asHtml(interests.data.description))}</span>
            </Interest>
          </Box>
        </Container>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const mainInfo = await client().getSingle('main', null);

  const interests = await client().getSingle('interests', null);

  return {
    props: {
      main: mainInfo,
      interests: interests
    },
    revalidate: 60,
  }
}