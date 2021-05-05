import { gql } from '@apollo/client';

export const ALL_PRODUCTS = gql`
  query AllProducts {
    products {
      id
      name
      category
      news
      slug
      imageUrl
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
        size
        imageUrl
        image {
          url
        }
        price
      }
    }
  }
`;

export const GET_ORDERS = gql`
  query Orders {
    self {
      orders {
        id
        created_at
        status
        value
        order_items {
          id
        }
      }
    }
  }
`;

export const GET_ORDER_BY_ID = gql`
  query OrderById($id: String!) {
    self {
      orders(where: { id: $id }) {
        id
        created_at
        status
        value
        order_items {
          id
          value
          amount
          product {
            imageUrl
            name
            size
          }
        }
      }
    }
  }
`;
