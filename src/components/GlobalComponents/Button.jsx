/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react'

export const Button = ({btnIcon,btnText}) => {
  return (
    <button css={styles}>
        <i className={(btnIcon?btnIcon:"iconMargin") }></i>
        {btnText}
    </button>
  )
}

const styles = css`
  padding: 14px 24px;
  border: none;
  outline: none;
  background: #eb566c;
  cursor: pointer;
  transition: background 300ms ease-in-out;
  color: #fff;
  border-radius: 50px;
  &:hover{
    background: #a53041;  
  }
  .iconMargin{
    margin-right: 0;
  }

`
