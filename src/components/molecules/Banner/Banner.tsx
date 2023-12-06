import { BannerWrapper } from './Banner.styles';

interface BannerProps {
  children: React.ReactNode;
  imageUrl: string;
  [key: string]: any;
}

const Banner: React.FC<BannerProps> = ({ children, imageUrl, ...rest }) => {
  return (
    <BannerWrapper imageurl={imageUrl} {...rest}>
      {children}
    </BannerWrapper>
  );
};

export default Banner;
