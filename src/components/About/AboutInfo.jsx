import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Title } from '../GlobalComponents/Title';
import { Button } from '../GlobalComponents/Button';


export const AboutInfo = () => {
  return (
        <div css={styles} className="aboutInfo">
            <Title text="Get your domain" />
            <h2>We are with you every step of the way</h2>
            <p>
            Our company is the world’s largest and trusted domain registrar that empowers people like you with creative ideas to succeed online. Buying a domain name is easy with our domain search tool and domain name generator tools you can find the perfect website address for your business.
            </p>
            <p>Millions of customers rely on our domains and web hosting to get their ideas online.</p>
            <Button btnText="GET STSRTED"/>
        </div>
  )
}
const styles = css`
width: 100%;
max-width: 480px;
color: #28395a;
h2{
    font-size: 40px;
    margin: 30px 0 40px 0;
}
p{
    margin-bottom: 14px;
    line-height: 2.3;
    font-size:15px;
}
button{
    margin: 30px 0 0 0;
    padding: 18px 32px;
    font-size: 15px;
    font-weight: 600;
}
@media (min-width: 881px) and (max-width:1215px){
    max-width: 50%;
    h2{
        font-size: 32px;
    }
    p{
        font-size: 14px;
    }
}
`