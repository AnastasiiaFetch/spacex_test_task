import { useRecoilValue } from 'recoil';
import ArrowLeft from '../../../assets/images/ArrowLeft';
import ArrowRight from '../../../assets/images/ArrowRight';
import Button from '../../atoms/Button/Button';
import {
  SliderButtonsWrapper,
  SliderCardsWrapper,
  SliderNavHeader,
  SliderNavWrapper,
  SliderWrapper,
} from './Slider.styles';
import { cardsState } from '../../../state/atoms/cards';
import { useState } from 'react';

const Slider = () => {
  const cards = useRecoilValue(cardsState) || [];

  const [currentCard, setCurrentCard] = useState(0);
  const cardsPerPage = 3;

  const handleNextButtonClick = () => {
    setCurrentCard(prevPage => (prevPage + 1) % cards.length);
  };

  const handlePrevButtonClick = () => {
    setCurrentCard(prevPage => (prevPage - 1 + cards.length) % cards.length);
  };

  const startIdx = currentCard;
  const endIdx = (startIdx + cardsPerPage) % cards.length;

  let visibleCards;
  if (startIdx <= endIdx) {
    visibleCards = cards.slice(startIdx, endIdx);
  } else {
    visibleCards = [...cards.slice(startIdx), ...cards.slice(0, endIdx)];
  }

  const buttons = [
    { id: 0, icon: ArrowLeft, onClick: handlePrevButtonClick },
    { id: 1, icon: ArrowRight, onClick: handleNextButtonClick },
  ];

  return (
    <SliderWrapper>
      <SliderNavWrapper>
        <SliderNavHeader>popular tours</SliderNavHeader>
        <SliderButtonsWrapper>
          {buttons.map(({ id, icon, onClick }) => {
            const Icon = icon;
            return (
              <Button bgColor="rgba(236, 236, 236, 1)" key={id} onClick={onClick}>
                <Icon size="20" />
              </Button>
            );
          })}
        </SliderButtonsWrapper>
      </SliderNavWrapper>

      <SliderCardsWrapper>
        <div style={{ background: 'red' }}>1</div>
        <div style={{ background: 'red' }}>2</div>
        <div style={{ background: 'red' }}>3</div>
      </SliderCardsWrapper>
    </SliderWrapper>
  );
};

export default Slider;
