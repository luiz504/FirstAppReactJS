import styled, { keyframes } from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;

    &:focus {
      color: #666;
    }
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 15px;
  }
  h1 {
    font-size: 24px;
    margin-top: 15px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.5;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 15px;
  margin-top: 15px;
  border-top: 1px solid #ddd;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #ddd;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #ddd;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          background: #ddd;
          color: #333;
          border-radius: 2px;
          margin-left: 5px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #666;
      }
    }
  }
`;

const clickUp = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-5px)
  }
`;
const clickLeft = keyframes`
  from{
    transform: translateX(0)
  }
  to{
    transform: translateX(-5px)
  }
`;
const clickRight = keyframes`
  from{
    transform: translateX(0)
  }
  to{
    transform: translateX(5px)
  }
`;

export const IssueFilter = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 15px;

  button {
    border-radius: 10px 2px 10px 2px;
    outline: 0;
    border: 0;
    padding: 5px;
    margin: 0 0.25rem;
    background: #ddd;

    &:focus {
      animation: ${clickUp} 250ms;
      background: #888;
      box-shadow: 1px 1px rgb(0, 0, 0, 0.5);
    }
  }
`;
export const PageList = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #666;

  #page-back {
    border-radius: 10px 2px 10px 2px;
    outline: 0;
    border: 0;
    padding: 5px;
    margin-left: 5%;

    &:focus {
      animation: ${clickLeft} 250ms;
    }

    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
  }
  #page-next {
    border-radius: 10px 2px 10px 2px;
    outline: 0;
    border: 0;
    padding: 5px;
    margin-right: 5%;

    &:focus {
      animation: ${clickRight} 250ms;
    }
  }
`;
