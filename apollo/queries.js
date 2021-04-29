import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query Products {
    products {
      id
      name
      image {
        url
      }
      price
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query ProductById($id: ID!) {
    product(id: $id) {
      id
      name
      image {
        url
      }
      price
    }
  }
`;
