import { gql } from '@apollo/client';

export const GET_LAUNCHES = gql`
  query getLaunches {
    launches {
      id
      launch_date_unix
      mission_id
      mission_name
      launch_site {
        site_name
        site_name_long
      }
      launch_success
      details
    }
  }
`;
