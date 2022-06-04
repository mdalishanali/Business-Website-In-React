import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
export const BottomFooter = () => {
  return (
 <div css={styles} className="bottomFooter">
      <p>
      Copyright &copy;2022 All rights reserved |Made with{" "}
      <i className="fa fa-heart"></i> by{" "}
      <a href="https://md-alishan-ali-modern-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
        Alishan Ali
      </a>
    </p>
    <div className="social">
        <div className="icon">
            <i className='fa fa-facebook'></i>
        </div>
        <div className="icon">
            <i className='fa fa-twitter'></i>
        </div>
        <div className="icon">
            <i className='fa fa-linkedin'></i>
        </div>
        <div className="icon">
            <i className='fa fa-reddit'></i>
        </div>
    </div>
 </div>
  )
}
const styles = css`
width: 100%;
max-width: 1200px;
margin:0 auto;
padding: 30px 0;
border-top: 1px solid #1c2e4c;
display: flex;
align-items:center ;
justify-content: space-between;
color: #8ba4b1;
p{
    font-size: 15px;
    a{
        text-decoration: none;
    }
    a,i{
        color: #eb566c;
    }
}
.social{
    display: flex;
    .icon{
        width: 40px;
        height: 40px;
        border: 1px solid #8ba4b1;
        border-radius: 50%;
        display: flex;
        cursor: pointer;
        transition: background 400ms ease-in-out, border 400ms ease-in-out;
        &:not(:last-of-type){
            margin-right: 10px;
        }
        &:hover{
            background: #eb566c;
            border: 1px solid #eb566c;
            i{
                color: #fff;
            }
        }
        i{
            margin: auto;
            transform: color 400ms ease-in-out;
        }
    }
}

@media (max-width:640px){
    flex-direction: column;
    align-items: center;
    text-align: center;
    .social{
        padding: 20px 0 0 0;
    }
}
@media (min-width:641px) and (max-width:930px){
    p{
        width: 60%;
    }
}
@media (max-width:1228px){
    max-width: 90%;
}
`
