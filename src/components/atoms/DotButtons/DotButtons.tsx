import Dot from '../../../assets/images/Dot';
import { DotButtonsWrapper } from './DotButtons.styles';

interface DotButtonsProps {
  itemsAmount: number;
  itemActive: number;
  setActiveItem: (index: number) => void;
  [key: string]: any;
}

const DotButtons: React.FC<DotButtonsProps> = ({
  itemsAmount,
  itemActive,
  setActiveItem,
  ...rest
}) => {
  return (
    <DotButtonsWrapper>
      {Array.from({ length: itemsAmount }, (_, index) => {
        const isActive = index === itemActive;
        return (
          <Dot
            key={index}
            size="24"
            isActive={isActive}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              setActiveItem(index);
            }}
            {...rest}
          />
        );
      })}
    </DotButtonsWrapper>
  );
};

export default DotButtons;
