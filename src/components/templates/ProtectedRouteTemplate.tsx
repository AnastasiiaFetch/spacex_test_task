import { useQuery } from '@apollo/client';
import { GET_ALL_CARDS } from '../../api';
import { Rocket } from '../../types/rocket';
import { useRecoilState } from 'recoil';
import { cardsState } from '../../state/atoms/cards';
import { useEffect } from 'react';

import img_03 from '../../assets/images/austronaut.svg';
import img_02 from '../../assets/images/command.svg';
import img_01 from '../../assets/images/satellite.svg';

type Props = {
  children: React.ReactNode;
};

const ProtectedRouteTemplate: React.FC<Props> = ({ children }) => {
  const {
    data: { rockets } = { rockets: null },
    error,
    loading,
  } = useQuery<{ rockets: Rocket[] | null }>(GET_ALL_CARDS);

  const imgs = [img_01, img_02, img_03];
  const [cards, setCards] = useRecoilState(cardsState);

  useEffect(() => {
    if (cards.length === 0 && rockets && !loading) {
      const expandedCards = Array.from({ length: 9 }, (_, index) => ({
        ...rockets[index % rockets.length],
        isSelected: false,
        id: rockets[index % rockets.length].id + index,
        photo: imgs[index % imgs.length],
      })) as Rocket[];

      setCards(expandedCards);
    }
  }, [rockets]);

  if (loading) return <p>Зачекайте, будь ласка, данні завантажуються...</p>;
  if (error) return <p>Помилка: {error.message}</p>;

  return <>{children}</>;
};

export default ProtectedRouteTemplate;
