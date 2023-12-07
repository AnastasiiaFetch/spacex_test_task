import styled, { keyframes } from 'styled-components';

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const LoaderItem = styled.div`
  border: 10px solid rgb(30 30 30 / 25%);
  border-radius: 50%;
  border-top: 5px solid rgb(30 30 30 / 50%);
  width: 15rem;
  height: 15rem;
  animation: ${spin} 1s linear infinite;
`;
