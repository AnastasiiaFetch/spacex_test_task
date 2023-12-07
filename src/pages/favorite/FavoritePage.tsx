import { Helmet } from 'react-helmet';
import img_01 from '../../assets/images/austronaut.svg';
import Banner from '../../components/molecules/Banner/Banner';
import { BannerContent } from '../../components/molecules/Banner/Banner.styles';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedCardsState } from '../../state/selectors/selectedCards';
import Button from '../../components/atoms/Button/Button';
import { FavoriteCardsSectionWrapper, FavoriteCardsWrapper } from './FavoritePage.styles';
import { useMemo } from 'react';
import Card from '../../components/molecules/Card/Card';
import Trash from '../../assets/images/Trash';
import { cardsState } from '../../state/atoms/cards';
import EmptyCard from '../../components/atoms/EmptyCard/EmptyCard';

const FavoritePage = () => {
  const selectedCards = useRecoilValue(selectedCardsState);
  const [cards, setCards] = useRecoilState(cardsState);

  const clearButtonClick = () => {
    const updatedCards = cards.map(card => ({ ...card, isSelected: false }));
    setCards(updatedCards);
  };

  const deleteButtonClick = (id: string) => {
    const updatedCards = cards.map(card =>
      card.id === id ? { ...card, isSelected: false } : card
    );
    setCards(updatedCards);
  };

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
        bgColor: 'rgba(236, 236, 236, 1)',
        content: <Trash size="20" />,
        onClick: deleteButtonClick,
      },
    ],
    []
  );

  const emptyCardCount = useMemo(() => Math.max(0, 3 - selectedCards.length), [selectedCards]);

  return (
    <>
      <Helmet>
        <title>Favorite | SpaceX</title>
      </Helmet>
      <Banner imageUrl={img_01} width="100%" height="70vh">
        <BannerContent>
          <div>favourites</div>
        </BannerContent>
      </Banner>

      <FavoriteCardsSectionWrapper>
        <Button
          bgColor="transparent"
          onClick={clearButtonClick}
          addStyles={{
            color: 'rgba(85, 107, 132, 1)',
            fontSize: '1.5rem',
            fontWeight: '300',
            textTransform: 'none',
            width: 'fit-content',
            fontFamily: 'Lato, sans-serif',
            alignSelf: 'end',
          }}
        >
          Clear all
        </Button>

        <FavoriteCardsWrapper>
          {selectedCards.map(card => {
            return <Card {...card} key={card.id} buttons={buttons} />;
          })}
          {Array.from({ length: emptyCardCount }).map((_, index) => (
            <EmptyCard key={index} />
          ))}
        </FavoriteCardsWrapper>
      </FavoriteCardsSectionWrapper>
    </>
  );
};

export default FavoritePage;
