import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.div`
  background-color: rgb(250, 136, 6);
  color: aliceblue;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
`;

const CopyrightText = styled.h6`
  color: aliceblue;
`;

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <CopyrightText>Todos los derechos reservados</CopyrightText>
      <SocialIconsContainer>
        <a href="https://www.linkedin.com/">
          <FaLinkedin size={32} color="blueviolet" />
        </a>
        <a href="https://www.facebook.com/">
          <FaFacebook size={32} color="blueviolet" />
        </a>
        <a href="https://twitter.com/">
          <FaTwitter size={32} color="blueviolet" />
        </a>
      </SocialIconsContainer>
    </FooterContainer>
  );
}