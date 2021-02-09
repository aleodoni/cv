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

import { Container, Course } from '@/styles/pages/courses/styles';

interface ICourse {
  courses: Document[]; 
  main: Document;
}

export default function Courses({ courses, main }: ICourse) {
  return (
    <Layout
      instagram={main.data.instagram.url} 
      facebook={main.data.facebook.url} 
      linkedin={main.data.linkedin.url}>
      <Head>
        <title>{PrismicDOM.RichText.asText(main.data.title)} | Courses</title>
      </Head>
      <div className="section">
        <Container>
          <h1>Cursos</h1>
          <ul>
            { courses.map((course) => (
              <div key={course.uid}>
                <Box width={100}>
                  <li>
                    <Course>
                      <h2>{ReactHtmlParser(PrismicDOM.RichText.asText(course.data.title))}</h2>
                      <span>{formatDate(course.data.course_date)}</span>
                      <span className="description">{ReactHtmlParser(PrismicDOM.RichText.asHtml(course.data.course_description))}</span>
                    </Course>
                  </li>
                </Box>
                <br />
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

  const courses = await client().query([
    Prismic.Predicates.at('document.type', 'courses')
  ], {
    pageSize: 100, 
  })

  return {
    props: {
      main: mainInfo,
      courses: courses.results
    },
    revalidate: 60,
  }
}