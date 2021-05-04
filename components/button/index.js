import styled from 'styled-components';
import MUIButton from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  position: relative;
`;

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

const Progress = styled(CircularProgress)`
  color: #333333;
  position: absolute;
  left: 50%;
  margin-left: -12px;
`;

export default function Button({ text, onClick, loading, ...rest }) {
  return (
    <Wrapper>
      <StyledButton
        variant="contained"
        onClick={onClick}
        fullWidth
        size="large"
        {...rest}
      >
        {!loading && text}
      </StyledButton>
      {loading && <Progress size={24} />}
    </Wrapper>
  );
}
