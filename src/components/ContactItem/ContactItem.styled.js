import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
`;
export const NameItem = styled.p`
  margin-right: 20px;
  display: block;
  width: 150px;
`;
export const NumberItem = styled.p`
  margin-right: 10px;
  display: block;
  width: 150px;
`;
export const ButtonItem = styled.button`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #8073b3;
  transition: transform 250ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  color: #194904;
  font-size: 20px;
  font-weight: 700;
  border-radius: 50%;

  border: none;
  cursor: pointer;
  :hover {
    transform: scale(1.03);
    box-shadow: rgb(39 37 37) -2px 3px 4px;
    background-color: #54506b;
    color: rgb(186, 161, 153);
    fill: red;
  }
`;
