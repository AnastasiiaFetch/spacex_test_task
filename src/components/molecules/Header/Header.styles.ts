import styled from 'styled-components';

export const NavWrapper = styled.div`
  background: rgba(30, 30, 30, 0.48);
  position: absolute;
  height: fit-content;
  width: 100%;
  padding: 1rem 4rem;
  margin-bottom: 1rem;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavListWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const NavButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  width: max-content;
  align-items: center;
`;
