import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Title } from '../GlobalComponents/Title';
import { Button } from '../GlobalComponents/Button';

export const PricingInfo = () => {
  return (
    <div className="pricingInfo" css={styles}>
        <Title text="Our Best Services"/>
        <h2>Our Pricing</h2>
        <p>
        A plan for every plan.
Your free, mobile-friendly site comes with built-in marketing and 24/7 support.
Keep it free forever, or upgrade to a paid plan for more business-building features.

        </p>
        <div className="priceBtn">
            <Button btnText="Monthly"/>
            <Button btnText="Yearly"/>
        </div>
    </div>
  )
}

const styles = css`
width:100%;
max-width: 600px;
h2{
    color: #28395a;
    font-size: 50px;
    margin: 34px 0 22px 0;
}
p{
    color: #10285d;
    font-size: 15px;
    line-height: 2.3;
}
.priceBtn{
    padding: 60px 0 0 0;
    button{
        padding: 14px 8px;
        width: 120px;
        font-weight: 600;
        &:nth-child(1){
            border-radius: 50px 0 0 50px;
        }
        &:nth-child(2){
            border-radius: 0 50px 50px 0;
        }
    }
}
@media (min-width:921px) and (max-width:1165px){
    max-width: 50%;
    padding: 50px 0;
}
`