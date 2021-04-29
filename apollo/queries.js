import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query Products {
    notNewsProducts: products(where: { news: false }) {
      id
      name
      category
      news
      image {
        url
      }
      price
    }

    newsProducts: products(where: { news: true }) {
      id
      name
      category
      news
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
      category
      news
      image {
        url
      }
      price
    }
  }
`;
