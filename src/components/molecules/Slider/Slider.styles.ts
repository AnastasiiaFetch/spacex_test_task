import styled from 'styled-components';

export const SliderWrapper = styled.div`
  padding: 3rem 4rem 2rem 4rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SliderNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SliderNavHeader = styled.div`
  text-transform: uppercase;

  font-family: 'Syne', sans-serif;
  color: rgba(30, 30, 30, 1);
  font-weight: 800;
  font-size: 2rem;
  line-height: 2.5rem;
  text-align: center;
`;

export const SliderButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  align-items: center;
`;

export const SliderCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;
