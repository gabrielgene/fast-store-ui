import Header from '~/components/header';
import { gql } from '@apollo/client';
import client from '../../config/apollo-client';

export default function Product({ title }) {
  return (
    <div>
      <Header title={title} />
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: gql`
      query Product($id: ID!) {
        product(id: $id) {
          id
          name
          price
        }
      }
    `,
    variables: { id: params.id },
  });
  console.log(params.id);
  console.log(data);
  return { props: { title: 'Camisa' } };
}
