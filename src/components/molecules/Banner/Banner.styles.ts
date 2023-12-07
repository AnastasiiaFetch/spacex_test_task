import styled from 'styled-components';

export const BannerWrapper = styled.div<any>`
  background-image: ${props => `url(${props.imageurl})`};
  transition: background-image linear 1s;
  background-size: cover;
  background-position: center;
  background-position-y: top;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  cursor: pointer;

  width: ${props => `${props.width}`};
  height: ${props => `${props.height}`};
`;

export const BannerContent = styled.div<any>`
  position: absolute;
  z-index: 10;

  font-family: 'Syne', sans-serif;
  color: rgba(255, 255, 255, 1);
  font-weight: 800;
  font-size: 20rem;
  line-height: 15rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.5rem;

  & > div:first-of-type {
    font-size: 3rem;
    line-height: 3.5rem;
    letter-spacing: 0.25rem;
  }

  & > div:last-of-type {
    position: relative;
  }
`;

export const BannerNavigation = styled.div<any>`
  position: absolute;
  z-index: 10;
  bottom: 1rem;

  & > a > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 0.8rem;

    font-family: 'Lato', sans-serif;
    color: rgba(255, 255, 255, 1);
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.5rem;
    text-align: center;

    -webkit-text-stroke: 1px black;
    text-stroke: 1px black;
  }
`;

export const BannerPagination = styled.div<any>`
  position: absolute;
  z-index: 10;
  bottom: 40%;
  right: 50%;
`;
