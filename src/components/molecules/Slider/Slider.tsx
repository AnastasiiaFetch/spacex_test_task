import { useRecoilState } from 'recoil';
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
import { useMemo, useState } from 'react';
import Card from '../Card/Card';
import DotButtons from '../../atoms/DotButtons/DotButtons';
import Heart from '../../../assets/images/Heart';

const Slider = () => {
  const [cards, setCards] = useRecoilState(cardsState);

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

  const visibleCards = useMemo(() => {
    if (startIdx <= endIdx) {
      return cards.slice(startIdx, endIdx);
    } else {
      return [...cards.slice(startIdx), ...cards.slice(0, endIdx)];
    }
  }, [startIdx, endIdx, cards]);

  const buttons = [
    { id: 0, icon: ArrowLeft, onClick: handlePrevButtonClick },
    { id: 1, icon: ArrowRight, onClick: handleNextButtonClick },
  ];

  const handleCardSelectClick = (id: string) => {
    setCards(prevCards =>
      prevCards?.map(card => (card.id === id ? { ...card, isSelected: !card.isSelected } : card))
    );
  };

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
        {visibleCards.map(card => {
          const buttons = useMemo(
            () => [
              {
                id: 0,
                bgColor: 'rgba(211, 234, 255, 1)',
                content: 'buy',
                onClick: () => {},
              },
              {
                id: 1,
                bgColor: card.isSelected ? 'rgba(221, 55, 125, 1)' : 'rgba(236, 236, 236, 1)',
                content: (
                  <Heart
                    size="20"
                    color={card.isSelected ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'}
                  />
                ),
                onClick: () => handleCardSelectClick(card.id),
              },
            ],
            [card]
          );
          return <Card {...card} key={card.id} buttons={buttons} />;
        })}
      </SliderCardsWrapper>
      <DotButtons
        itemsAmount={cardsPerPage}
        itemActive={Math.floor(currentCard / cardsPerPage)}
        setActiveItem={index => setCurrentCard(index * cardsPerPage)}
        color="black"
      />
    </SliderWrapper>
  );
};

export default Slider;
