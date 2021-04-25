import styled from 'styled-components';
import MUIButton from '@material-ui/core/Button';

const StyledButton = styled(MUIButton)`
  border-radius: 25px;
  background-color: #db3022;
  color: #ffffff;
  height: 48px;
  &:hover {
    background-color: #db3022;
  }
`;

export default function Button({ text, onClick }) {
  return (
    <StyledButton variant="contained" onClick={onClick} fullWidth size="large">
      {text}
    </StyledButton>
  );
}
