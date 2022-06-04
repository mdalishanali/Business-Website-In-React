import React from 'react'
import { Title } from '../components/GlobalComponents/Title'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
export const SupportInfo = () => {
  return (
    <div css={styles} className="supportInfo">
        <Title text="Get your domain"/>
        <h2>24/7 Expert Support</h2>
        <p>
      Our expert team is always on hand to help answer your questions, get you
      started, and grow your presence online. You can call, chat or email us any
      time!
    </p>
    </div>
  )
}
const styles = css`
    color:#fff;
    width: 100%;
    max-width: 500px;
    h2{
        font-size: 32px;
        line-height: 1;
        margin: 40px 0;
    }
    p{
        line-height: 1.8;
        font-size: 15px;
    }
    @media (min-width:826px) and (max-width:1190px){
        max-width: 50%;
    }
`