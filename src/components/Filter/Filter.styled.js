import styled from 'styled-components';

export const FilterLabel = styled.label`
  margin-bottom: 20px;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 20px;
  color: #066305;
`;
export const FilterInput = styled.input`
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 20px;
  margin-left: ${p => (p.name === 'name' ? '25px ' : '20px')};
  border: 3px solid #646eab;
  border-radius: 10px;
  background-color: transparent;
  background-color: #ffffff4f;
  :hover,
  :focus {
    border-color: green;
    outline: green;
  }
`;
