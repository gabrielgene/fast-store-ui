import MUITextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const TextField = styled(MUITextField)`
  .MuiFormLabel-root.Mui-focused {
    color: #333333;
  }
  .MuiFilledInput-underline:after {
    border-bottom: 2px solid #333333;
  }
  margin-bottom: 24px;
`;

export default function Input({ name, type }) {
  return (
    <TextField
      fullWidth
      id={`id-${name}`}
      label={name}
      type={type}
      variant="filled"
      InputProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0.06)' } }}
    />
  );
}
