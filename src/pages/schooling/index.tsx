import Head from 'next/head'
import { Document } from 'prismic-javascript/types/documents';
import { GetStaticProps } from 'next';
import PrismicDOM from 'prismic-dom';
import Prismic from 'prismic-javascript';
import ReactHtmlParser from 'react-html-parser';

import Layout from '@/components/Layout';

import { client } from '@/lib/prismic';

import { formatDate } from '@/lib/format';

import { Container, School } from '@/styles/pages/schooling/styles';

interface ISchooling {
  schooling: Document[]; 
  main: Document;
}

export default function Schooling({ schooling, main }: ISchooling) {
  return (
    <Layout
      instagram={main.data.instagram.url} 
      facebook={main.data.facebook.url} 
      linkedin={main.data.linkedin.url}>
      <Head>
        <title>{PrismicDOM.RichText.asText(main.data.title)} | Jobs</title>
      </Head>
      <div className="section">
        <Container>
          <h1>Schooling</h1>
          <ul>
            { schooling.map((school) => (
              <div key={school.uid}>
                <li>
                  <School>
                    <h2>{ReactHtmlParser(PrismicDOM.RichText.asText(school.data.title))}</h2>
                    <h3>{ReactHtmlParser(PrismicDOM.RichText.asText(school.data.institution))}</h3>
                    <span>{ReactHtmlParser(PrismicDOM.RichText.asHtml(school.data.year))}</span>
                  </School>
                </li>
                <hr />
              </div>              
            ))}
          </ul>
        </Container>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const mainInfo = await client().getSingle('main', null);

  const schooling = await client().query([
    Prismic.Predicates.at('document.type', 'schooling')
  ], {
    pageSize: 100, 
  })

  return {
    props: {
      main: mainInfo,
      schooling: schooling.results
    },
    revalidate: 60,
  }
}