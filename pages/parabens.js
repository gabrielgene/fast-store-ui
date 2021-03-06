import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Button from '~/components/button';
import Fixed from '~/components/fixed';
import Topbar from '~/components/topbar';
import { LOCAL_URI } from '~/apollo/client';

const Wrapper = styled.div`
  padding: 65px 40px;
  display: flex;
  justify-content: center;
`;

const myLoader = ({ src, width, quality }) => {
  return `${LOCAL_URI}${src}?w=${width}&q=${quality || 75}`;
};

export default function Payment() {
  const router = useRouter();

  return (
    <>
      <Topbar />
      <Wrapper>
        <Image
          loader={myLoader}
          src="/icons/logo.svg"
          width={78.5}
          height={213.1}
        />
      </Wrapper>
      <div style={{ backgroundColor: '#F9F9F9' }}>
        <div style={{ marginBottom: 122 }} />
        <Fixed>
          <Button text="Continuar comprando" onClick={() => router.push('/')} />
        </Fixed>
      </div>
    </>
  );
}
