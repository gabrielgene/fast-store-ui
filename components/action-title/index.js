import styled from 'styled-components';
import { Text34, Text11 } from '~/components/text';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
`;

export default function ActionTitle({ title, subtitle, action, actionText }) {
  return (
    <Wrapper>
      <div>
        <Text34>{title}</Text34>
        <Text11>{subtitle}</Text11>
      </div>
      <Text11 style={{ color: '#222222' }} onClick={action}>
        {actionText}
      </Text11>
    </Wrapper>
  );
}
