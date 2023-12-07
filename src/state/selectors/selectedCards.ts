import { selector } from 'recoil';
import { cardsState } from '../atoms/cards';
import { Rocket } from '../../types/rocket';

export const selectedCardsState = selector<Rocket[]>({
  key: 'selectedCards',
  get: ({ get }) => {
    const cards = get(cardsState);
    if (!cards) {
      return [];
    }

    return cards.filter(card => card.isSelected);
  },
});
