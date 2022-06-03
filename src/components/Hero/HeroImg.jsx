/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react'
import HeroBg from "../../img/heroBg.webp"
export const HeroImg = () => (
  <div css={styles} className="heroImg"></div>
)
const styles = css`
width:100%;
max-width:500px;
height: 600px;
background:url("${HeroBg}") no-repeat center/cover;
@media (max-width:940px){
    display: none;
}
@media (min-width:941px) and (max-width:1245px){
    max-width: 400px;
    height: 400px;
}

`