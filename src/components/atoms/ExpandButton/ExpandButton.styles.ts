import styled from 'styled-components';

export const StyledExpandButton = styled.button`
  display: inline;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid transparent;
  height: fit-content;
  width: fit-content;
  margin: 0 0.5rem;

  font-family: 'Syne', sans-serif;
  color: rgba(0, 0, 0, 1);
  font-weight: 300;
  font-size: 1rem;
  text-align: center;

  &:hover {
    border-bottom: 1px solid rgba(0, 0, 0, 1);
  }
`;
