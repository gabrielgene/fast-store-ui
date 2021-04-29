import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px 14px 44px 14px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export default function Fixed({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
