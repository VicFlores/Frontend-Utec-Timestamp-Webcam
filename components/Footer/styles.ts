import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #1f2937;
  color: white;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  align-items: center;
  justify-content: center;
  height: auto;
  margin-top: ${(props) =>
    props.theme?.margin ? `${props.theme.margin}px` : '0'};

  @media (min-width: 992px) {
    height: 150px;
  }
`;

export const LinkRouter = styled.a`
  color: #ffffff;
  text-decoration: none;
`;

export const LinkName = styled.p`
  font-size: 14px;
  margin: ${(props) => (props.theme?.margin ? `${props.theme.margin}` : '0')};
`;

export const FooterLinksContainer = styled.div`
  display: grid;
  grid-auto-rows: 60px;

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 200px);
    justify-content: center;
    align-items: center;
  }
`;

export const FooterLinks = styled.div`
  align-self: center;
  justify-self: center;
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
