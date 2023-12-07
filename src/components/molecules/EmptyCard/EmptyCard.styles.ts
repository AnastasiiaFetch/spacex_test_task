import styled from 'styled-components';

export const EmptyCardWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  width: 100%;
  min-height: 30rem;
  height: 100%;

  cursor: pointer;
  border: 1px solid rgba(211, 234, 255, 1);

  &:hover {
    -webkit-box-shadow: 0px 0px 32px 0px rgba(211, 234, 255, 1);
    -moz-box-shadow: 0px 0px 32px 0px rgba(211, 234, 255, 1);
    box-shadow: 0px 0px 32px 0px rgba(211, 234, 255, 1);
  }
`;
