import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Title } from '../GlobalComponents/Title';
export const SponsorsInfo = () => {
  return (
    <div css={styles} className="sponsorInfo">
        <Title text="Get your domain"/>
        <h2>We are with you every step of the way</h2>
    </div>
  )
}
const styles = css`
width:100%;
max-width:600px;
padding:30px 0 0 0;
h2{
    color:#28395a;
    font-size: 45px;
    margin: 20px 0 0 0;
}
@media (max-width:626px){
    h2{
        font-size: 32px;
    }
}

`
