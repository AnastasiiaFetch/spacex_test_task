import { Helmet } from 'react-helmet-async';
import img_01 from '../../assets/images/command.svg';
import Banner from '../../components/molecules/Banner/Banner';
import { BannerContent } from '../../components/molecules/Banner/Banner.styles';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/Button/Button';
import { NotFoundButtonsWrapper } from './NotFoundPage.styles';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const go = (target: number | string) => () => navigate(target as string);
  return (
    <>
      <Helmet>
        <title>Not Found | SpaceX</title>
      </Helmet>
      <Banner imageUrl={img_01} width="100vw" height="100vh">
        <BannerContent>
          <div>
            page was not found...
            <NotFoundButtonsWrapper>
              <Button onClick={go(-1)}>Go back</Button>
              <Button onClick={go('/')}>Home</Button>
            </NotFoundButtonsWrapper>
          </div>
        </BannerContent>
      </Banner>
    </>
  );
};

export default NotFoundPage;
