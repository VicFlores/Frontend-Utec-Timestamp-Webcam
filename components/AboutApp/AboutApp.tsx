import Link from 'next/link';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Footer from '../Footer/Footer';
import {
  AboutAppButton,
  AboutAppButtonContainer,
  AboutAppContainer,
  AboutAppMainContainer,
  AboutAppMainImage,
  AboutAppMainImageContainer,
  AboutAppSubTitle,
  AboutAppTechnologies,
  AboutAppTechnologiesContainer,
  AboutAppTechnologiesImage,
  AboutAppTechnologiesImageContainer,
  AboutAppTitle,
  AboutAppTitleTechnologies,
  AboutAppMain,
  AboutAppMainSubTitleImage,
  AboutAppTechnologiesInfo,
  LinkRouter,
} from './styles';

const AboutApp = () => {
  return (
    <>
      <AboutAppMain>
        <AboutAppContainer>
          <AboutAppTitle theme={{ color: 'white', textAlign_xl: 'center' }}>
            Working with the latest technology
          </AboutAppTitle>
          <AboutAppSubTitle
            theme={{
              color: 'white',
              textAlign: 'center',
              margin_subtitle_xsm: 20,
              margin_subtitle_xl: 90,
            }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. It is a
            long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout.
          </AboutAppSubTitle>

          <AboutAppButtonContainer>
            <AboutAppButton>About Me</AboutAppButton>
            <AboutAppButton>
              <LinkRouter href='/login' passHref>
                Get Started
              </LinkRouter>
            </AboutAppButton>
          </AboutAppButtonContainer>
        </AboutAppContainer>

        <AboutAppMainContainer>
          <AboutAppTitle theme={{ color: 'black' }}>
            Whats new about utec timestamp?
          </AboutAppTitle>

          <AboutAppMainSubTitleImage>
            <AboutAppSubTitle
              theme={{
                color: 'black',
                textAlign: 'justify',
                margin_subtitle_xsm: 20,
              }}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal It
              is a long established. It is a long established fact that a reader
              will be distracted by the readable content of a page when looking
              at its layout.
            </AboutAppSubTitle>

            <AboutAppMainImageContainer>
              <AboutAppMainImage src='https://res.cloudinary.com/vicflores11/image/upload/v1660777819/frontend-utec-timestamp/home-font_tprxko.png' />
            </AboutAppMainImageContainer>
          </AboutAppMainSubTitleImage>
        </AboutAppMainContainer>

        <AboutAppTechnologiesContainer>
          <AboutAppTitle
            theme={{
              marginTitle_technologies_xl: 45,
              marginTitle: '0 0 30px 0',
            }}>
            The best technologies for your applications
          </AboutAppTitle>

          <ThemeProvider
            theme={{ marginTitle: '0 25px', margin_subtitle_xsm: 20 }}>
            <AboutAppTechnologies>
              <AboutAppTechnologiesInfo>
                <AboutAppTitleTechnologies>
                  Typescript
                </AboutAppTitleTechnologies>
                <AboutAppSubTitle>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal It is a long established
                </AboutAppSubTitle>
              </AboutAppTechnologiesInfo>

              <AboutAppTechnologiesImageContainer
                theme={{ height: 200, width: 200 }}>
                <AboutAppTechnologiesImage src='https://res.cloudinary.com/vicflores11/image/upload/v1660957549/frontend-utec-timestamp/ts-removebg_dn0cle.png' />
              </AboutAppTechnologiesImageContainer>
            </AboutAppTechnologies>

            <AboutAppTechnologies>
              <AboutAppTechnologiesInfo>
                <AboutAppTitleTechnologies>NodeJs</AboutAppTitleTechnologies>
                <AboutAppSubTitle>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal It is a long established
                </AboutAppSubTitle>
              </AboutAppTechnologiesInfo>

              <AboutAppTechnologiesImageContainer
                theme={{ height: 164, width: 215 }}>
                <AboutAppTechnologiesImage src='https://res.cloudinary.com/vicflores11/image/upload/v1661018424/frontend-utec-timestamp/NodeJs-removebg-preview_rcnben.png' />
              </AboutAppTechnologiesImageContainer>
            </AboutAppTechnologies>

            <AboutAppTechnologies>
              <AboutAppTechnologiesInfo>
                <AboutAppTitleTechnologies>NextJs</AboutAppTitleTechnologies>
                <AboutAppSubTitle>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal It is a long established
                </AboutAppSubTitle>
              </AboutAppTechnologiesInfo>

              <AboutAppTechnologiesImageContainer
                theme={{ height: 164, width: 215 }}>
                <AboutAppTechnologiesImage src='https://res.cloudinary.com/vicflores11/image/upload/v1661020296/frontend-utec-timestamp/undraw_next_js_-8-g5m_xwmghc.svg' />
              </AboutAppTechnologiesImageContainer>
            </AboutAppTechnologies>

            <AboutAppTechnologies>
              <AboutAppTechnologiesInfo>
                <AboutAppTitleTechnologies>
                  TensorFlow
                </AboutAppTitleTechnologies>
                <AboutAppSubTitle>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal It is a long established
                </AboutAppSubTitle>
              </AboutAppTechnologiesInfo>

              <AboutAppTechnologiesImageContainer
                theme={{ height: 159, width: 258 }}>
                <AboutAppTechnologiesImage src='https://res.cloudinary.com/vicflores11/image/upload/v1661020852/frontend-utec-timestamp/Dise%C3%B1o_sin_t%C3%ADtulo-removebg-preview_vkrgvq.png' />
              </AboutAppTechnologiesImageContainer>
            </AboutAppTechnologies>
          </ThemeProvider>
        </AboutAppTechnologiesContainer>
      </AboutAppMain>

      <Footer margin='90' />
    </>
  );
};

export default AboutApp;
