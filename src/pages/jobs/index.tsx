import Head from 'next/head'
import { Document } from 'prismic-javascript/types/documents';
import { GetStaticProps } from 'next';
import PrismicDOM from 'prismic-dom';
import Prismic from 'prismic-javascript';
import ReactHtmlParser from 'react-html-parser';

import Layout from '@/components/Layout';

import { client } from '@/lib/prismic';

import { formatDate } from '@/lib/format';

import Box from '@/components/Box';

import { Container, Job } from '@/styles/pages/jobs/styles';

interface IJobs {
  jobs: Document[]; 
  main: Document;
}

export default function Jobs({ jobs, main }: IJobs) {
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
          <h1>Jobs</h1>
          <ul>
            { jobs.map((job) => (
              <div key={job.uid}>
                <Box width={100}>
                <li>
                  <Job>
                    <h2>{ReactHtmlParser(PrismicDOM.RichText.asText(job.data.company))}</h2>
                    <span>{formatDate(job.data.date_in)} - {formatDate(job.data.date_put)}</span>
                    <h3>{ReactHtmlParser(PrismicDOM.RichText.asText(job.data.job_title))}</h3>
                    <span className="description">{ReactHtmlParser(PrismicDOM.RichText.asHtml(job.data.description))}</span>
                  </Job>
                </li>
                </Box>
                <br/>
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

  const jobs = await client().query([
    Prismic.Predicates.at('document.type', 'jobs')
  ], {
    pageSize: 100, 
    orderings: '[my.jobs.date_in desc]',
  })

  return {
    props: {
      main: mainInfo,
      jobs: jobs.results
    },
    revalidate: 60,
  }
}