import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px 14px 44px 14px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

export default function Fixed({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
