import { Link } from 'react-router-dom';

const Logo: React.FC<{ source: string }> = ({ source }) => {
  return (
    <Link to="/">
      <img alt="logo" src={source} style={{ mixBlendMode: 'difference' }} />
    </Link>
  );
};

export default Logo;
