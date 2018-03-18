import React from 'react';
import Link from 'gatsby-link';
import { ParallaxBanner } from 'react-scroll-parallax';
import busBackground from '../assets/BusBackground.jpg';
import background from '../assets/background2.jpg';
import polakPotrafi from '../assets/polakpotrafi_white.svg';
import LandingText from '../components/landing/LandingText';
import Wstep from '../components/landing/Wstep';

const IndexPage = () => (
  <header className="landing">
    <section className="landing__banner">
      <ParallaxBanner
        className="landing__banner--parallax"
        layers={[
          {
            amount: 0.3,
            image: background,
            slowerScrollRate: true
          }
        ]}
        style={{
          height: '100vh'
        }}
      >
        <div className="landing__banner--wspomoz">Wspomóż nas na:</div>
        <a target="_blank" href="https://polakpotrafi.pl/projekt/zdrowybus.pl">
          <img className="landing__banner--polakPotrafi" src={polakPotrafi} alt="Polak Potrafi" />
        </a>
        <LandingText />
      </ParallaxBanner>
    </section>
    <Wstep />
    <ParallaxBanner
      className="landing__wstep--parallax"
      layers={[
        {
          amount: 0.1,
          image: busBackground,
          slowerScrollRate: true
        }
      ]}
      style={{
        height: '90vh'
      }}
    />
  </header>
);

export default IndexPage;
