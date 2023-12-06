import { Link } from 'react-router-dom';
import { NavButton as Button } from './NavButton.styles';

interface NavButtonProps {
  text: string;
  navigate: string;
}
const NavButton: React.FC<NavButtonProps> = ({ text, navigate }) => {
  return (
    <Button>
      <Link to={navigate}>{text}</Link>
    </Button>
  );
};

export default NavButton;
