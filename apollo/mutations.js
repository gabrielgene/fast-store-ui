import { gql } from '@apollo/client';

export const CREATE_USER_PAYMENT = gql`
  mutation createUserPayment(
    $username: String!
    $email: String!
    $password: String!
    $externalReference: String!
    $status: String!
  ) {
    register(
      input: { username: $username, email: $email, password: $password }
    ) {
      jwt
      user {
        id
      }
    }
    createPayment(
      input: {
        data: { externalReference: $externalReference, status: $status }
      }
    ) {
      payment {
        id
      }
    }
  }
`;

export const CREATE_ORDER = gql`
  mutation createOrder(
    $user: ID!
    $products: [ID]!
    $payment: ID!
    $value: Float!
    $status: String!
  ) {
    createOrder(
      input: {
        data: {
          user: $user
          products: $products
          payment: $payment
          value: $value
          status: $status
        }
      }
    ) {
      order {
        id
      }
    }
  }
`;
