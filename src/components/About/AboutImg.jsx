import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ServerBg from '../../img/serverBg.webp'
export const AboutImg = () => {
  return (
   <div className='aboutImg' css = {styles}>

   </div>
  )
}

const styles = css`
  width: 100%;
  max-width: 560px;
  height: 500px;
  background: url('${ServerBg}') no-repeat center/cover;
  @media(max-width: 880px) {
    max-width: 600px;
    height: 450px;
  }
  @media (min-width: 881px) and (max-width: 1215px) {
    max-width: 43%;
    height: 350px;
  }
`;