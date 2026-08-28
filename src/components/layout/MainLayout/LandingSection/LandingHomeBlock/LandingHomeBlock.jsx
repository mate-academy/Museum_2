import React from 'react';
import './LandingHomeBlock.scss';
import P from '@components/ui/StyleBlocks/P/P';
import H from '@components/ui/StyleBlocks/H/H';
import Button from '@components/ui/Button/Button';
import ResponsiveImage from '@components/ui/ResponsiveImage/ResponsiveImage';
import HeroImageMobile from '@assets/HeroImages/HeroImageMobile.webp';
import HeroImageTablet from '@assets/HeroImages/HeroImageTablet.webp';
import HeroImageDesktop from '@assets/HeroImages/HeroImageDesktop.webp';
import { useTranslation } from 'react-i18next';

const LandingHomeBlock = () => {
  const { t } = useTranslation();
  return (
    <section className="landing-home-block">
      <div className="landing-home-block__container container">
        <div className="landing-home-block__content">
          <div className="landing-home-block__info">
            <P
              textAlign="start"
              fsize="14px"
              lineHeight="140%"
              className="landing-home-block__period"
            >
              {t('home.period')}
            </P>

            <H
              size="h1"
              textAlign="center"
              className="landing-home-block__heading"
            >
              {t('home.title')}
            </H>

            <P textAlign="start" className="landing-home-block__description">
              {t('home.description')}
            </P>

            <div className="landing-home-block__actions">
              <Button>{t('home.buyTicket')}</Button>
            </div>

            <div className="landing-home-block__date">
              <P
                textAlign="start"
                fsize="14px"
                lineHeight="125%"
                fontWeight="700"
                className="landing-home-block__date-text"
              >
                {t('home.shortDate')}
              </P>
              <div className="landing-home-block__date-line"></div>
            </div>
          </div>

          <div className="landing-home-block__img-container">
            <ResponsiveImage
              mobile={HeroImageMobile}
              tablet={HeroImageTablet}
              desktop={HeroImageDesktop}
              alt="Мистецтво ХІХ - ХХ ст."
              className="landing-home-block__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHomeBlock;
