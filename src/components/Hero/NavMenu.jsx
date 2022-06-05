/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react'
import { NavLink } from './NavLink';
import { Button } from '../GlobalComponents/Button';
export const NavMenu = ({ toggleMenu, link }) => (
  <div css={styles} className={(toggleMenu ? "opened" : "") + " menu"}>
    <NavLink text="Home" link='#home' />
    <NavLink text="About" link='#about' />
    <NavLink text="Services" link='#services' />
    <NavLink text="Blog" link='#blog' />
    <NavLink text="Pages" link='#pricing' />
    <NavLink text="Contact" link='#contact' />
    <Button btnIcon="fa fa-user fa-lg" btnText="+9163-914-17248" />
    
  </div>
);

const styles = css`
  @media (max-width: 940px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    left: -800px;
    top: 0;
    padding: 40px 60px;
    background: #1a1a50;
    min-height: 100vh;
    width: 100%;
    max-width: 280px;
    transition: left 800ms ease-in-out;
    &.opened {
      left: 0;
    }
    button {
      border-radius: 0;
      width: 100%;
      padding: 16px 24px;
    }
  }
`;
