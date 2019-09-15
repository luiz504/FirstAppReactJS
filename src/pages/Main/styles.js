import styled, { keyframes, css } from 'styled-components';

const pulse = keyframes`
 from {
  box-shadow: 0 0 0 0px rgba(220, 23, 47, 0.2);
 }
 to{
  box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
 }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid ${props => (props.error ? '#DC172F' : '#ddd')};
    padding: 10px 15px;
    border-radius: 50px;
    font-size: 16px;

    ${props =>
      props.error &&
      css`
        animation: ${pulse} 1s;
        animation-iteration-count: 3;
      `}
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg)
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 15px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #ddd;
    }

    a {
      color: #7159c1;
      text-decoration: none;

      &:focus {
        color: #666;
      }
    }
  }
`;
