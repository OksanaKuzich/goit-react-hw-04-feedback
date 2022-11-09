import styled from 'styled-components';

export const ButtonStyle = styled.button`
  font-size: 14px;
  font-weight: 700;
  width: 80px;
  height: 30px;
  border-style: none;
  border-radius: 10px;

  :not(:last-of-type) {
    margin-right: 10px;
  }

  :nth-of-type(1) {
    background-color: #005003;
  }

  :nth-of-type(2) {
    background-color: #ffd900;
  }

  :nth-of-type(3) {
    background-color: #b30000;
  }
`;
