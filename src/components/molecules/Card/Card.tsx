import { useState } from 'react';
import { Rocket } from '../../../types/rocket';
import { CardButtonsWrapper, CardContentWrapper, CardImg, CardWrapper } from './Card.styles';
import ExpandButton from '../../atoms/ExpandButton/ExpandButton';
import Heart from '../../../assets/images/Heart';
import Button from '../../atoms/Button/Button';
import { useRecoilState } from 'recoil';
import { cardsState } from '../../../state/atoms/cards';

const Card: React.FC<Rocket> = ({ name, description, photo, id, isSelected }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [cards, setCards] = useRecoilState(cardsState);

  const handleCardSelectClick = () => {
    if (!cards) return;
    const newCardList = cards?.map(card =>
      card.id === id ? { ...card, isSelected: !card.isSelected } : card
    );
    setCards(newCardList);
  };

  const buttons = [
    { id: 0, bgColor: 'rgba(211, 234, 255, 1)', content: 'buy', onClick: () => {} },
    {
      id: 1,
      bgColor: isSelected ? 'rgba(221, 55, 125, 1)' : 'rgba(236, 236, 236, 1)',
      content: (
        <Heart size="20" color={isSelected ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'} />
      ),
      onClick: handleCardSelectClick,
    },
  ];
  return (
    <CardWrapper>
      <CardImg imageurl={photo} />
      <CardContentWrapper>
        <div>{name}</div>
        <div>
          {isExpanded ? description : description.slice(0, 100) + '...'}
          <ExpandButton isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        </div>
      </CardContentWrapper>
      <CardButtonsWrapper>
        {buttons.map(({ id, bgColor, content, onClick }) => (
          <Button key={`${content}-${id}`} bgColor={bgColor} onClick={onClick}>
            {content}
          </Button>
        ))}
      </CardButtonsWrapper>
    </CardWrapper>
  );
};

export default Card;
