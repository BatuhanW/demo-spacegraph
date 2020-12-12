import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { Layout } from '../../src/components';
import { ISpaceX } from '../../src/interface/SpaceX';
import { GET_LAUNCHES } from '../../src/queries';

export default function Launches() {
  const { data, loading, error, fetchMore } = useQuery(GET_LAUNCHES, {
    variables: { offset: 0, limit: 4 },
  });

  const [offset, setOffset] = useState(4);
  const [launches, setLaunches] = useState<ISpaceX.Launch[]>([]);
  const [fetchedAll, setFetchedAll] = useState(false);

  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  useEffect(() => {
    if (data) {
      setLaunches(data.launches);
    }
  }, [data]);

  return (
    <Layout>
      <div className="w-full flex justify-center">
        {loading && <div className="text-gray-500 font-bold">LOADING</div>}
        {data && (
          // Tailwind CSS example table (modified)
          <div className="flex flex-col">
            <div className="ml-8 mb-8 text-gray-500">
              <Link as="/" href="/">
                Home
              </Link>
              <span className="font-bold"> / Launches</span>
            </div>
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr className="bg-gray-50 text-left text-gray-500 uppercase tracking-wider">
                        <th scope="col" className="px-6 py-3 font-medium ">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium ">
                          Details
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium ">
                          Location
                        </th>
                        <th scope="col" className="px-6 py-3 font-medium ">
                          Year
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {launches.map((launch: ISpaceX.Launch, i: number) => {
                        const date = new Date(launch.launch_date_unix * 1000);
                        const lid = launch.id;
                        const mid = launch.mission_id;

                        return (
                          <tr key={`mission-row-${i + 1}`}>
                            <td className="px-6 py-4">
                              <div className="flex flex-col">
                                <div className="text-sm text-gray-900">
                                  {launch.mission_name}
                                </div>
                                {mid && (
                                  <div className="text-sm text-blue-300 underline">
                                    <Link
                                      href={`/launches/missiondetails?mid=${mid}&lid=${lid}`}
                                      as={`/launches/missiondetails?mid=${mid}&lid=${lid}`}
                                    >
                                      see details
                                    </Link>
                                  </div>
                                )}
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900">
                              <div className="max-w-xs">{launch.details}</div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900">
                              {launch.launch_site.site_name}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900">
                              {date.getFullYear()}
                            </td>
                            <td className="px-6 py-4 text-center text-sm font-medium">
                              {launch.launch_success ? (
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  SUCCESS
                                </span>
                              ) : (
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                  FAIL
                                </span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  {fetchedAll || (
                    <div
                      className="text-gray-900 flex justify-center p-3 text-blue-400 cursor-pointer"
                      onClick={() => {
                        fetchMore({
                          variables: { offset, limit: 3 },
                          updateQuery: (
                            previousResult,
                            { fetchMoreResult }
                          ) => {
                            if (!fetchMoreResult.launches.length)
                              setFetchedAll(true);
                            setOffset(prevState => prevState + 4);
                            setLaunches(prevState => [
                              ...prevState,
                              ...fetchMoreResult.launches,
                            ]);
                          },
                        });
                      }}
                    >
                      load more
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
