import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    background-color: inherit;
    border: none;
    font-family: Avenir;
    font-size: 14px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: 1.4px;
    text-align: center;
    color: #b6babd;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

export default function Button({ bgColor, onClick, children }) {
  return (
    <Btn onClick={onClick} style={{ backgroundColor: bgColor || 'transparent' }}>
      {children}
    </Btn>
  );
}
