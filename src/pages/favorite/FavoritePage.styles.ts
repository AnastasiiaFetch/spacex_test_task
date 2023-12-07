import styled from 'styled-components';

export const FavoriteCardsSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  gap: 2rem;
`;

export const FavoriteCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;
