import { useEffect, useState } from 'react';
import { BannerWrapper } from './Banner.styles';
import Loader from '../Loader/Loader';

interface BannerProps {
  children: React.ReactNode;
  imageUrl: string;
  [key: string]: any;
}

const Banner: React.FC<BannerProps> = ({ children, imageUrl, ...rest }) => {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setBackgroundImage(img.src);
      setLoading(false);
    };
  }, [imageUrl]);

  return (
    <BannerWrapper imageurl={backgroundImage} {...rest}>
      {loading ? <Loader /> : <>{children}</>}
    </BannerWrapper>
  );
};

export default Banner;
