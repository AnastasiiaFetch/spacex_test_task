import Logo from '../../atoms/Logo/Logo';
import NavButton from '../../atoms/NavButton/NavButton';
import { NavButtonsWrapper, NavListWrapper, NavWrapper } from './Header.styles';
import logo from '../../../assets/logos/spacex.svg';
import Button from '../../atoms/Button/Button';
import Heart from '../../../assets/images/Heart';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const navItems = [
    { id: 0, link: '/', text: 'home' },
    { id: 1, link: '#', text: 'tours' },
    { id: 2, link: '#', text: 'about' },
    { id: 3, link: '#', text: 'help' },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const isFavPage = location.pathname.includes('favorite');

  const buttons = [
    {
      id: 0,
      bgColor: isFavPage ? 'rgba(221, 55, 125, 1)' : 'rgba(236, 236, 236, 1)',
      content: (
        <Heart size="20" color={isFavPage ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'} />
      ),
      onClick: () => navigate('/favorite'),
    },
    { id: 1, bgColor: 'rgba(211, 234, 255, 1)', content: 'sign in', onClick: () => {} },
  ];
  return (
    <header>
      <nav>
        <NavWrapper>
          <Logo source={logo} />
          <NavListWrapper>
            {navItems.map(({ text, link, id }) => (
              <NavButton text={text} key={`${text}-${id}`} link={link} />
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
