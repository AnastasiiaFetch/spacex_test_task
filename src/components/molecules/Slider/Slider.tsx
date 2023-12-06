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

const Slider = () => {
  const buttons = [
    { id: 0, icon: ArrowLeft, onClick: () => {} },
    { id: 1, icon: ArrowRight, onClick: () => {} },
  ];
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
        <div style={{ background: 'red' }}>1</div>
        <div style={{ background: 'red' }}>2</div>
        <div style={{ background: 'red' }}>3</div>
      </SliderCardsWrapper>
    </SliderWrapper>
  );
};

export default Slider;
