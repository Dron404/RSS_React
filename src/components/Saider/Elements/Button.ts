import styled from 'styled-components';

const Button = styled.div`
  padding: 10px;
  opacity: 0.7;
  text-align: center;
  width: max-content;
  cursor: pointer;
  margin: 0 auto;

  &:hover {
    opacity: 1;
    border-bottom: 2px solid #1677ff;
  }
`;
export default Button;
