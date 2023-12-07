import { useState } from 'react';
import { Rocket } from '../../../types/rocket';
import { CardButtonsWrapper, CardContentWrapper, CardImg, CardWrapper } from './Card.styles';
import ExpandButton from '../../atoms/ExpandButton/ExpandButton';
import Button from '../../atoms/Button/Button';

const Card: React.FC<Rocket & { buttons: any[] }> = ({
  name,
  description,
  photo,
  id: cardId,
  buttons,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
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
          <Button key={`${content}-${id}`} bgColor={bgColor} onClick={() => onClick(cardId)}>
            {content}
          </Button>
        ))}
      </CardButtonsWrapper>
    </CardWrapper>
  );
};

export default Card;
