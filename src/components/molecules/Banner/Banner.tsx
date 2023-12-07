import { useEffect, useState } from 'react';
import { BannerWrapper } from './Banner.styles';

interface BannerProps {
  children: React.ReactNode;
  imageUrl: string;
  [key: string]: any;
}

const Banner: React.FC<BannerProps> = ({ children, imageUrl, ...rest }) => {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setBackgroundImage(img.src);
  }, [imageUrl]);

  return (
    <BannerWrapper imageurl={backgroundImage} {...rest}>
      {!backgroundImage ? <div>Loading...</div> : <>{children}</>}
    </BannerWrapper>
  );
};

export default Banner;
