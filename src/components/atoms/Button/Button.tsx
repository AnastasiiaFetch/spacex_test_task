import { StyledButton } from './Button.style';

interface ButtonProps {
  bgColor: string;
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ bgColor, children, onClick = () => {} }) => {
  return <StyledButton bgColor={bgColor}>{children}</StyledButton>;
};

export default Button;
