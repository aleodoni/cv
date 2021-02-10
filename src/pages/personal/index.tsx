import Head from 'next/head'
import { Document } from 'prismic-javascript/types/documents';
import { GetStaticProps } from 'next';
import PrismicDOM from 'prismic-dom';
import ReactHtmlParser from 'react-html-parser';

import Layout from '@/components/Layout';

import Box from '@/components/Box';

import { client } from '@/lib/prismic';

import { Container, Person } from '@/styles/pages/personal/styles';

interface IPersonal {
  personal: Document; 
  main: Document;
}

export default function Personal({ personal, main }: IPersonal) {
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
          <h1>Pessoal</h1>
          <Box width={100}>
            <Person>
              <span>{ReactHtmlParser(PrismicDOM.RichText.asHtml(personal.data.personal_data))}</span>
            </Person>
          </Box>
        </Container>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const mainInfo = await client().getSingle('main', null);

  const personal = await client().getSingle('personal', null);

  return {
    props: {
      main: mainInfo,
      personal
    },
    revalidate: 60,
  }
}