import styled from 'styled-components';
import Icon from '~/components/icon';

const Wrapper = styled.div`
  height: 36px;
  width: 36px;
  padding: 6px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
`;

export default function CartButtom({ icon, className, onClick }) {
  return (
    <Wrapper className={className} onClick={onClick}>
      <Icon name={icon} active />
    </Wrapper>
  );
}
