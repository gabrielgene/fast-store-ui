import { gql } from '@apollo/client';

export const ALL_PRODUCTS = gql`
  query AllProducts {
    products {
      id
      name
      category
      news
      slug
      image {
        url
      }
      price
    }
  }
`;

export const GET_PRODUCT_BY_SLUG = gql`
  query ProductBySlug($slug: String!) {
    productsConnection(where: { slug: $slug }, limit: 1) {
      values {
        id
        name
        category
        news
        description
        image {
          url
        }
        price
      }
    }
  }
`;
