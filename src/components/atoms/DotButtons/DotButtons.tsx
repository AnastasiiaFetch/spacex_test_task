import Dot from '../../../assets/images/Dot';

interface DotButtonsProps {
  itemsAmount: number;
  itemActive: number;
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
}

const DotButtons: React.FC<DotButtonsProps> = ({ itemsAmount, itemActive, setActiveItem }) => {
  return (
    <>
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
          />
        );
      })}
    </>
  );
};

export default DotButtons;
