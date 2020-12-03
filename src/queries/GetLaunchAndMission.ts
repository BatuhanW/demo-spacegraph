import { gql } from '@apollo/client';

export const GET_LAUNCH_AND_MISSION = gql`
  query getLaunchAndMission($lid: ID!, $mid: ID!) {
    launch(id: $lid) {
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
    mission(id: $mid) {
      name
      wikipedia
      website
      description
      payloads {
        nationality
      }
    }
  }
`;
