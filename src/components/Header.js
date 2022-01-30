import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0 6px 17px 2px rgb(51 62 73 / 8%);
  transition: transform 0.3s ease-out;
  position: sticky;
  top: 0;
  background-color: #fff;
  height: 90px;
  @media (min-width: 768px) {
    justify-content: center;
  }
  h3 {
    font-family: Avenir;
    font-size: 20px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.93;
    letter-spacing: normal;
    color: #3e4b54;
    margin: 20px;
    @media (min-width: 768px) {
      font-size: 28px;
    }
  }

  a {
    @media (min-width: 768px) {
      position: absolute;
      left: 20px;
    }
  }
  img {
    width: 70px;
    @media (min-width: 768px) {
      width: 150px;
    }
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Link className="link-btn" to="/">
        <img src="/xceed-logo-black.png" alt="xceed-logo" />
      </Link>
      <h3>Xceed Liga Challenge 2021</h3>
    </HeaderContainer>
  );
}
