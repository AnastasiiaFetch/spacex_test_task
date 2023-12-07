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

  &:active {
    -webkit-box-shadow: 0px 0px 10px 0px ${props => props.bgcolor};
    -moz-box-shadow: 0px 0px 10px 0px ${props => props.bgcolor};
    box-shadow: 0px 0px 10px 0px ${props => props.bgcolor};
  }

  ${props => props.addstyles};
`;
