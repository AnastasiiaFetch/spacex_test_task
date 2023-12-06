import Logo from '../../atoms/Logo/Logo';
import NavButton from '../../atoms/NavButton/NavButton';
import { NavButtonsWrapper, NavListWrapper, NavWrapper } from './Header.styles';
import logo from '../../../assets/logos/spacex.svg';
import Button from '../../atoms/Button/Button';
import Heart from '../../../assets/images/Heart';

const Header = () => {
  const navItems = [
    { id: 0, navigate: '/', text: 'home' },
    { id: 1, navigate: '#', text: 'tours' },
    { id: 2, navigate: '#', text: 'about' },
    { id: 3, navigate: '#', text: 'help' },
  ];

  const buttons = [
    { id: 0, bgColor: 'rgba(236, 236, 236, 1)', content: <Heart size="20" />, onClick: () => {} },
    { id: 1, bgColor: 'rgba(211, 234, 255, 1)', content: 'sign in', onClick: () => {} },
  ];
  return (
    <header>
      <nav>
        <NavWrapper>
          <Logo source={logo} />
          <NavListWrapper>
            {navItems.map(({ text, navigate, id }) => (
              <NavButton text={text} key={`${text}-${id}`} navigate={navigate} />
            ))}
          </NavListWrapper>
          <NavButtonsWrapper>
            {buttons.map(({ id, bgColor, content, onClick }) => (
              <Button key={`${content}-${id}`} bgColor={bgColor} onClick={onClick}>
                {content}
              </Button>
            ))}
          </NavButtonsWrapper>
        </NavWrapper>
      </nav>
    </header>
  );
};

export default Header;
