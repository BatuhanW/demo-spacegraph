import { useEffect } from 'react';
import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';
import styles from '../styles/Home.module.css';

export default function Home() {
  const GET_SPACEX_DATA = gql`
    query GetSpaceData {
      company {
        ceo
        coo
        cto
        employees
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_SPACEX_DATA);

  useEffect(() => {
    if (data) console.log('gee:', data);
  }, [data]);

  useEffect(() => {
    if (loading) console.log('loading...');
  }, [loading]);

  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  return <div className={styles.container}></div>;
}
