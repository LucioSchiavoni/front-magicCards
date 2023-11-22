  import { gql } from "@apollo/client";
  
  export const GET_CARDS = gql`
  query {
    cards {
      name
      description
      points
    }
  }
`;