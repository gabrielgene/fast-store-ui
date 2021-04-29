import styled from 'styled-components';
import { Text11 } from '~/components/text';

const Wrapper = styled.div`
  background-color: #222222;
  border-radius: 29px;
  padding: 6px;
`;

export default function Badge({ text, style, className }) {
  return (
    <Wrapper className={className} style={style}>
      <Text11 style={{ color: '#ffffff' }}>{text}</Text11>
    </Wrapper>
  );
}
