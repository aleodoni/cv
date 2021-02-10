import Head from 'next/head'
import { Document } from 'prismic-javascript/types/documents';
import { GetStaticProps } from 'next';
import PrismicDOM from 'prismic-dom';
import Prismic from 'prismic-javascript';

import Layout from '@/components/Layout';

import { client } from '@/lib/prismic';

import Box from '@/components/Box';

import { Container, Know, KnowWrapper } from '@/styles/pages/knowledge/styles';

interface IKnowledge {
  area: string;
  knowledge: Document[];
}

interface ICourse {
  knowledge: IKnowledge[]; 
  main: Document;
}

export default function Knowledge({ knowledge, main }: ICourse) {
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
          <h1>Conhecimento</h1>
          <ul>
            { knowledge.map((item) => (
              <div key={item.area}>
                <Box width={100}>
                  <li>
                    <Know>
                      <h2>{item.area}</h2>
                      <KnowWrapper>
                        { item.knowledge.map((know) => (
                          <span className="description">{know.data.knowledge} ({know.data.level})</span>
                        ))}
                      </KnowWrapper>
                    </Know>
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

  const areas = await client().query([
    Prismic.Predicates.at('document.type', 'area')
  ], {
    pageSize: 100, 
    orderings: '[my.area.id]'
  });

  const arrayAreas = areas.results.map((area) => {
    return {
      id: area.id,
      name: area.data.name[0].text,
    }
  });

  const results = Promise.all(arrayAreas.map(async (area) => {
    const knowledge = await client().query([
      Prismic.Predicates.at('document.type', 'knowledge'),
      Prismic.Predicates.at('my.knowledge.area', area.id)
    ], {
      pageSize: 100, 
    })

    return {
      area: area.name,
      knowledge: knowledge.results,
    }
  }));

  return {
    props: {
      main: mainInfo,
      knowledge: await results
    },
    revalidate: 60,
  }
}