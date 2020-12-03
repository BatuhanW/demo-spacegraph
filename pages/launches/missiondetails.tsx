import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import moment from 'moment';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons';
import { Layout } from '../../src/components';
import { GET_LAUNCH_AND_MISSION } from '../../src/queries';

export default function MissionDetails() {
  const router = useRouter();
  const { mid, lid } = router.query;

  if (mid && lid) {
    const { data, loading } = useQuery(GET_LAUNCH_AND_MISSION, {
      variables: { lid, mid },
    });

    return (
      <Layout>
        <div className="w-full flex justify-center">
          {loading && <div className="text-gray-500 font-bold">LOADING</div>}
          {data && (
            <div className="flex flex-col">
              <div className="ml-8 mb-8 text-gray-500">
                <Link as="/" href="/">
                  Home
                </Link>
                <span> / </span>
                <Link as="/launches" href="/launches">
                  Launches
                </Link>
                <span className="font-bold"> / Mission Details</span>
              </div>

              <div className="bg-white shadow overflow-hidden sm:rounded-lg max-w-5xl">
                <div className="px-4 py-5 sm:px-6">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg leading-6 text-gray-900">
                        {data.launch.mission_name}
                      </h3>
                    </div>
                    <div className="flex gap-5">
                      <div>
                        <a
                          href={data.mission.wikipedia}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <FontAwesomeIcon
                            color="#4299E1"
                            icon={faWikipediaW}
                          />
                        </a>
                      </div>
                      <div>
                        <a
                          href={data.mission.website}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <FontAwesomeIcon color="#4299E1" icon={faGlobe} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-gray-600">Mission name</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {data.mission.name}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-gray-600">Country</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {data.mission.payloads[0].nationality}
                      </dd>
                    </div>
                    <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-gray-600">Launch location</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {data.launch.launch_site.site_name_long}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-gray-600">Date</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {moment.unix(data.launch.launch_date_unix).format('LL')}
                      </dd>
                    </div>
                    <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-gray-600">Description</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {data.mission.description}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-gray-600">Launch Result</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {data.launch.launch_success ? (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            SUCCESS
                          </span>
                        ) : (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                            FAIL
                          </span>
                        )}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          )}
        </div>
      </Layout>
    );
  }

  return <Layout />;
}
