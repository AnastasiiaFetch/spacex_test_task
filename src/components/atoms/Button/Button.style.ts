import styled from 'styled-components';

export const StyledButton = styled.button<any>`
  background: ${props => props.bgcolor};
  cursor: pointer;
  border: 1px solid transparent;
  height: 100%;
  width: 100%;
  text-wrap: nowrap;
  text-transform: uppercase;
  padding: 0.4rem 0.8rem;

  font-family: 'Syne', sans-serif;
  color: rgba(0, 0, 0, 1);
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;

  ${props => props.addstyles};
`;
