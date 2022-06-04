/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react'
import { Container } from '../GlobalComponents/Container';
import { Title } from '../GlobalComponents/Title';
import { ServiceCard } from './ServiceCard';
export const Services = () => (
  <section css={styles} className="services" id="services">
    <Title text="Our Best Services"/>
    <h2>What we have for you</h2>
    <Container>
      <ServiceCard  cardIcon="fa fa-server fa-5x"
      cardTitle="Shared Hosting"
      cardNumber="0.1"/>

<ServiceCard
        cardIcon="fa fa-internet-explorer fa-5x"
        cardTitle="Reseller Hosting"
        cardNumber=".02"
      />
      <ServiceCard
        cardIcon="fa fa-cloud fa-5x"
        cardTitle="Cloud Hosting"
        cardNumber=".03"
      />

    </Container>

  </section>
)
const styles = css`
  width: 100%;
  padding: 140px 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: rgb(248,245,242);
  background: linear-gradient(180deg, rgba(248,245,242,1) 50%,
  rgba(255,255,255,1) 50%);
  .title{
    justify-content: center;
  }
  h2{
    text-align: center;
    color: #28395a;
    font-size: 34px;
    margin:20px 0 0 0;
  }
  .container{
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 100px 0 0 0;
  }
  @media (max-width:900px) {
    .container{
      flex-direction: column;
      align-items: center;
      
    }
  }

  @media (min-width:901px) and (max-width:1288px){
    .container{
      flex-wrap: wrap;
    }
  }
  
`