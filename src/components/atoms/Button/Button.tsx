import { StyledButton } from './Button.style';

interface ButtonProps {
  bgColor: string;
  children: React.ReactNode;
  onClick: () => void;
  addStyles?: any;
}

const Button: React.FC<ButtonProps> = ({
  bgColor,
  children,
  onClick = () => {},
  addStyles = {},
}) => {
  return (
    <StyledButton bgcolor={bgColor} onClick={onClick} addstyles={addStyles}>
      {children}
    </StyledButton>
  );
};

export default Button;
