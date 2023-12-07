import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  width: 100%;
  height: fit-content;

  cursor: pointer;
  border: 1px solid rgba(211, 234, 255, 1);

  &:hover {
    -webkit-box-shadow: 0px 0px 32px 0px rgba(211, 234, 255, 1);
    -moz-box-shadow: 0px 0px 32px 0px rgba(211, 234, 255, 1);
    box-shadow: 0px 0px 32px 0px rgba(211, 234, 255, 1);
  }
`;

export const CardImg = styled.div<{ imageurl: string }>`
  background-image: ${props => `url(${props.imageurl})`};
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 15rem;
`;

export const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin: 0.5rem 0 0 0;
  gap: 0.5rem;
  padding: 2rem;
  text-align: center;

  & > div:nth-of-type(1) {
    font-family: 'Syne', sans-serif;
    color: rgba(30, 30, 30, 1);
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.7rem;
  }

  & > div:nth-of-type(2) {
    font-family: 'Lato', sans-serif;
    color: rgba(85, 107, 132, 1);
    font-weight: 300;
    min-height: 5rem;
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
`;

export const CardButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  height: fit-content;
  width: 100%;
  gap: 1.5rem;
  padding: 0 1.5rem 1.5rem 1.5rem;

  cursor: pointer;
`;
