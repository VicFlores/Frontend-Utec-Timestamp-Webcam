import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineFacebook,
} from 'react-icons/ai';
import { ThemeProvider } from 'styled-components';
import { LinkRouter } from '../AboutApp/styles';
import {
  FooterContainer,
  FooterLinks,
  FooterLinksContainer,
  LinkName,
  SocialMedia,
} from './styles';

const Footer: NextPage<{ margin: string }> = ({ margin }) => {
  return (
    <FooterContainer theme={{ margin }}>
      <FooterLinksContainer>
        <FooterLinks>
          <LinkRouter href='/' passHref>
            Developed by: Vic Flores
          </LinkRouter>
        </FooterLinks>

        <FooterLinks>
          <LinkRouter href='/' passHref>
            About me
          </LinkRouter>
        </FooterLinks>

        <FooterLinks>
          <LinkRouter href='/' passHref>
            App Info
          </LinkRouter>
        </FooterLinks>

        <FooterLinks>
          <LinkRouter href='/' passHref>
            All rights reserved © 2022
          </LinkRouter>
        </FooterLinks>

        <ThemeProvider theme={{ margin: '0 15px' }}>
          <SocialMedia>
            <AiFillGithub fontSize={32} />

            <LinkRouter href='/' passHref>
              <LinkName>Github</LinkName>
            </LinkRouter>
          </SocialMedia>

          <SocialMedia>
            <AiOutlineInstagram fontSize={32} />

            <LinkRouter href='/' passHref>
              <LinkName>Instagram</LinkName>
            </LinkRouter>
          </SocialMedia>

          <SocialMedia>
            <AiOutlineLinkedin fontSize={32} />

            <LinkRouter href='/' passHref>
              <LinkName>Linkedin</LinkName>
            </LinkRouter>
          </SocialMedia>

          <SocialMedia>
            <AiOutlineFacebook fontSize={32} />

            <LinkRouter href='/' passHref>
              <LinkName>Facebook</LinkName>
            </LinkRouter>
          </SocialMedia>
        </ThemeProvider>
      </FooterLinksContainer>
    </FooterContainer>
  );
};

export default Footer;
