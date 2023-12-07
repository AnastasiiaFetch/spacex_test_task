import { atom } from 'recoil';
import { Rocket } from '../../types/rocket';

export const cardsState = atom<Rocket[]>({
  key: 'cards',
  default: [],
});
