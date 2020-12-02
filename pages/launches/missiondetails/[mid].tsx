import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useApolloClient, useQuery } from '@apollo/client';
import { Layout } from '../../../src/components';
import { GET_LAUNCHES, GET_MISSION_DETAILS } from '../../../src/queries';
import { ISpaceX } from '../../../src/interface/SpaceX';

export default function MissionDetails() {
  const client = useApolloClient();
  const router = useRouter();

  const { mid } = router.query;

  const [launch, setLaunch] = useState<ISpaceX.Launch>();

  useEffect(() => {
    const queryData = client.readQuery({ query: GET_LAUNCHES });
    const currentLaunch = queryData.launches.find(
      (l: ISpaceX.Launch) => l.mission_id[0] === mid
    );

    setLaunch(currentLaunch);
  }, []);

  const { data, loading } = useQuery(GET_MISSION_DETAILS, {
    variables: { id: mid },
  });

  return (
    <Layout>
      <div className="w-full flex justify-center">
        {loading && 'Loading...'}
        {data && <div></div>}
      </div>
    </Layout>
  );
}
