import Link from 'next/link';
import styled from 'styled-components';

export const LinkRouter = styled(Link)`
  color: white;
  margin: 0 15px;
  text-decoration: none;
`;

export const AboutAppMain = styled.section`
  background-color: #f2f2f2;
`;

/* Presentation */

export const AboutAppContainer = styled.section`
  align-items: center;
  background-image: url(https://res.cloudinary.com/vicflores11/image/upload/v1660772447/frontend-utec-timestamp/david-schultz-SrewPUfo2c0-unsplash_qfihiu.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 100px 125px auto;
  height: 495px;
  justify-content: center;
  text-align: center;
  gap: 15px;

  @media (min-width: 992px) {
    grid-template-rows: auto;
  }
`;

export const AboutAppTitle = styled.p`
  align-self: end;
  color: ${(props) => props.theme.color};
  font-size: 20px;
  font-weight: bold;
  margin: ${(props) =>
    props.theme?.marginTitle ? props.theme.marginTitle : '0'};
  text-align: center;

  @media (min-width: 992px) {
    font-size: 30px;
    margin: 0 0 ${(props) => props.theme.marginTitle_technologies_xl}px 100px;
    text-align: ${(props) =>
      props.theme?.textAlign_xl ? props.theme.textAlign_xl : 'left'};
  }
`;

export const AboutAppSubTitle = styled.p`
  color: ${(props) => props.theme.color};
  font-size: ${(props) => props.theme.fontSize};
  font-weight: normal;
  margin: 0 ${(props) => props.theme.margin_subtitle_xsm}px;
  text-align: ${(props) => props.theme.textAlign};

  @media (min-width: 992px) {
    margin: 0 ${(props) => props.theme.margin_subtitle_xl}px;
    font-size: 16px;
  }
`;

export const AboutAppButtonContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: start;
  height: 100%;
  width: 100%;

  @media (min-width: 992px) {
    display: flex;
  }
`;

export const AboutAppButton = styled.button`
  color: white;
  text-align: center;
  background: #1f4690;
  font-size: 15px;
  border: none;
  padding: 15px 15px;
  border-radius: 6px;
  width: 137px;

  @media (min-width: 992px) {
    margin-right: 25px;
  }
`;

/* About App Main */

export const AboutAppMainContainer = styled.div`
  align-items: center;
  display: grid;
  grid-template-rows: 100px auto;
  height: 495px;
  justify-content: center;

  @media (min-width: 992px) {
    gap: 40px;
    margin-top: 50px;
  }
`;

export const AboutAppMainSubTitleImage = styled.div`
  display: grid;
  gap: 20px;
  @media (min-width: 992px) {
    grid-template-columns: 600px 1fr;
    gap: 45px;
    align-self: start;
    align-items: center;
    height: 300px;
  }
`;

export const AboutAppMainImageContainer = styled.figure`
  text-align: center;
`;

export const AboutAppMainImage = styled.img`
  width: 226px;
  height: 200px;
  background-color: #2a3746;
`;

/* Technologies App */

export const AboutAppTechnologiesContainer = styled.section`
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-columns: 1fr;

  @media (min-width: 992px) {
    align-items: center;
    justify-content: center;
    grid-template-rows: 100px 300px;
  }
`;

export const AboutAppTitleTechnologies = styled.p`
  align-self: end;
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 50px 0 15px 20px;

  @media (min-width: 992px) {
    margin: 0 0 28px 0;
  }
`;

export const AboutAppTechnologies = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 20px;

  &:nth-child(even) {
    background: #e6e8ec;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 732px 1fr;
    gap: 50px;
    align-items: center;
    height: 300px;
  }

  @media (min-width: 992px) {
    grid-template-columns: 680px 1fr;
    gap: 50px;
    align-items: center;
    height: 300px;
  }
`;

export const AboutAppTechnologiesInfo = styled.div`
  @media (min-width: 992px) {
    margin-left: 100px;
  }
`;

export const AboutAppTechnologiesImageContainer = styled.figure`
  margin: 0;
  text-align: center;
  height: ${(props) => props.theme.height}px;
  width: ${(props) => props.theme.width}px;
  align-self: center;
  justify-self: center;

  @media (min-width: 992px) {
    justify-self: start;
  }
`;

export const AboutAppTechnologiesImage = styled.img`
  overflow: hidden;
  height: inherit;
  width: inherit;
`;
