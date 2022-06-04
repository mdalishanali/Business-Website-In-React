import React from 'react'
import { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CardData from './CardData';
import { Container } from '../GlobalComponents/Container';
import { BottomFooter } from './BottomFooter';
import FooterBg from "../../img/footerBg.webp";
export const Footer = () => {
    const [data,setData]=useState(CardData);
  return (
<footer id="contact" css={styles}>
    <Container>
        {
            data.map((cardItem,index)=>(
                <div key={index} className="footerCard">
                      {
                          cardItem.cardLogo
                          &&
                          <img src={cardItem.cardLogo} alt="logo" />
                      }  
                <h2>{cardItem.cardTitle}</h2>
                {
                    cardItem.cardLink&&
                    <a href="#/">{cardItem.cardLink}</a>
                }
                {
                    cardItem.cardLink2&&
                    <a href="#/">{cardItem.cardLink2}</a>
                }
                {
                    cardItem.cardLink3&&
                    <a href="#/">{cardItem.cardLink3}</a>
                }
                {
                    cardItem.cardLink4&&
                    <a href="#/">{cardItem.cardLink4}</a>
                }
                {
                    cardItem.cardText&&
                    <a href="#/">{cardItem.cardText}</a>
                }
                </div>
            ))
        }
    </Container>
    <BottomFooter/>
</footer>
  )
}
const styles = css`
width: 100%;
background: url("${FooterBg}")  no-repeat center/cover;
.container{
    padding: 140px 0 100px 0;
    display: flex;
    justify-content: space-between;
    .footerCard{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        max-width: 250px;
        &:nth-child(1){
            max-width: 320px;
        }
        img{
            cursor: pointer;
            display: block;
        }
        h2{
            padding: 12px 0 0 0;
            color: #fff;
            line-height: 1;
            font-size: 22px;
            font-weight: 500;
            margin-bottom: 30px;
        }
        a{
            text-decoration: none;
            display: inline-block;
            font-size: 15px;
            margin: 10px 0;
            color: #8ba4b1;
            transition: color 300ms ease-in-out;
            transform: 500ms ease-in-out;
            &:hover{
                color: #eb566c;
                transform: translateX(10px);
            }
        }
        p{
            color: #8ba4b1;
            font-size: 15px;
            margin: 18px 0 0 0;
            line-height: 2;
        }
    }
}
@media (max-width:640px){
    .container{
        flex-direction: column;
        align-items: flex-start;
    }
}
@media (min-width:641px) and (max-width:1000px){
    .container{
        flex-wrap: wrap;
        
    }
}
    
`