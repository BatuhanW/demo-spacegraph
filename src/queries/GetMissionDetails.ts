import { gql } from '@apollo/client';

export const GET_MISSION_DETAILS = gql`
  query getMissionDetails($id: ID!) {
    mission(id: $id) {
      name
      wikipedia
      website
      description
    }
  }
`;
