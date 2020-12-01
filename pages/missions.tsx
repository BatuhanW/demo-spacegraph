import { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Layout, Button } from '../src/components';
import style from '../styles/Missions.module.css';

export default function Missions() {
  const GET_MISSIONS = gql`
    query getMissions {
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

  const { data, loading, error } = useQuery(GET_MISSIONS);

  useEffect(() => {
    if (data) console.log('data:', data);
  }, [data]);

  useEffect(() => {
    if (loading) console.log('loading...');
  }, [loading]);

  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  return <Layout>asd</Layout>;
}
