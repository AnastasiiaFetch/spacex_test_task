import { StyledExpandButton } from './ExpandButton.styles';

interface ExpandButtonProps {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExpandButton: React.FC<ExpandButtonProps> = ({ isExpanded, setIsExpanded }) => {
  return (
    <StyledExpandButton onClick={() => setIsExpanded(!isExpanded)}>
      {isExpanded ? `hide` : `more`}
    </StyledExpandButton>
  );
};

export default ExpandButton;
