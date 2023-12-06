import { useQuery } from '@apollo/client';
import { GET_ALL_CARDS } from '../../api';
import { Rocket } from '../../types/rocket';
import { useRecoilState } from 'recoil';
import { cardsState } from '../../state/atoms/cards';
import { useEffect } from 'react';
import { equals } from 'ramda';

type Props = {
  children: React.ReactNode;
};

const ProtectedRouteTemplate: React.FC<Props> = ({ children }) => {
  const {
    data: { rockets } = { rockets: null },
    error,
    loading,
  } = useQuery<{ rockets: Rocket[] | null }>(GET_ALL_CARDS);

  const [cards, setCards] = useRecoilState(cardsState);

  useEffect(() => {
    if (!equals(cards, rockets) && rockets && !loading) {
      setCards([...rockets.map(rocket => ({ ...rocket, isSelected: false }))]);
    }
  }, [rockets]);

  console.log(cards);

  if (loading) return <p>Зачекайте, будь ласка, данні завантажуються...</p>;
  if (error) return <p>Помилка: {error.message}</p>;
  return <>{children}</>;
};

export default ProtectedRouteTemplate;
