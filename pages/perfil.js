import { gql } from '@apollo/client';
import client from '~/apollo/client';
import Header from '~/components/header';
import ProductsList from '~/components/product-list';
import Navigation from '~/components/navigation';

export default function Perfil({ products }) {
  return (
    <div>
      <Header title="Perfil" />
      {/* <ProductsList products={products} /> */}
      <Navigation />
    </div>
  );
}
