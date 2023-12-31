import Banner from '../../components/molecules/Banner/Banner';
import img_03 from '../../assets/images/austronaut.svg';
import img_02 from '../../assets/images/command.svg';
import img_01 from '../../assets/images/satellite.svg';
import { useState } from 'react';
import {
  BannerContent,
  BannerNavigation,
  BannerPagination,
} from '../../components/molecules/Banner/Banner.styles';
import ArrowDown from '../../assets/images/ArrowDown';
import Slider from '../../components/molecules/Slider/Slider';
import DotButtons from '../../components/atoms/DotButtons/DotButtons';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  const imgs = [img_01, img_02, img_03];
  const [currentImage, setCurrentImage] = useState<number>(0);

  const handleBannerClick = (): void => {
    setCurrentImage(prevImage => (prevImage === imgs.length - 1 ? 0 : prevImage + 1));
  };

  return (
    <>
      <Helmet>
        <title>Home | SpaceX</title>
      </Helmet>
      <main>
        <section id="banner_section">
          <Banner
            onClick={handleBannerClick}
            imageUrl={imgs[currentImage]}
            width="100vw"
            height="100vh"
          >
            <BannerContent>
              <div>The space is waiting for</div>
              <div>
                <BannerPagination>
                  <DotButtons
                    itemsAmount={imgs.length}
                    itemActive={currentImage}
                    setActiveItem={setCurrentImage}
                  />
                </BannerPagination>
                you
              </div>
            </BannerContent>

            <BannerNavigation
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => e.stopPropagation()}
            >
              <a href="#slider_section">
                <div>
                  <div>Explore tours</div>
                  <ArrowDown size="30" />
                </div>
              </a>
            </BannerNavigation>
          </Banner>
        </section>

        <section id="slider_section">
          <Slider />
        </section>
      </main>
    </>
  );
};

export default HomePage;
