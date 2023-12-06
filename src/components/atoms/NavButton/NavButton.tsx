import { Link } from 'react-router-dom';
import { NavButton as Button } from './NavButton.styles';

interface NavButtonProps {
  text: string;
  link: string;
}
const NavButton: React.FC<NavButtonProps> = ({ text, link }) => {
  return (
    <Button>
      <Link to={link}>{text}</Link>
    </Button>
  );
};

export default NavButton;
