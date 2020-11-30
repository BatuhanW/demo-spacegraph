import { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Layout } from '../src/components';
import style from '../styles/Home.module.css';

export default function Home() {
  const GET_SPACEX_DATA = gql`
    query spacex {
      missions {
        description
        id
        manufacturers
        name
        wikipedia
        website
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_SPACEX_DATA);

  useEffect(() => {
    if (data) console.log('data:', data);
  }, [data]);

  useEffect(() => {
    if (loading) console.log('loading...');
  }, [loading]);

  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  return (
    <Layout>
      <div className={`${style.homeImage}`}>
        <div className={style.overlay} />
        <div className={style.imageWrapper}>
          <img className={style.image} src="spaceman.png" alt="astronaut" />
        </div>
      </div>
      {loading && <div>Loading...</div>}
      <div className="h-full w-full relative flex justify-center pt-8">
        <div>
          <img src="/logo.svg" />
        </div>
      </div>
    </Layout>
  );
}
