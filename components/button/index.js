import styled from 'styled-components';
import MUIButton from '@material-ui/core/Button';

const StyledButton = styled(MUIButton)`
  border-radius: 25px;
  background-color: #a5e4d9;
  color: #333333;
  height: 48px;
  font-family: 'Montserrat';
  &:hover {
    background-color: #a5e4d9;
  }
`;

export default function Button({ text, onClick }) {
  return (
    <StyledButton variant="contained" onClick={onClick} fullWidth size="large">
      {text}
    </StyledButton>
  );
}
