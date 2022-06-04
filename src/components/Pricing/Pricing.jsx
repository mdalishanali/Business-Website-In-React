import React from 'react'
import { Container } from '../GlobalComponents/Container'
import { PricingCard } from './PricingCard'
import { PricingInfo } from './PricingInfo'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


export const Pricing = () => {
  return (
   <section css={styles}>
       <Container>
            <PricingCard/>
            <PricingInfo/>
       </Container>
   </section>
  )
}
const styles = css`
    width: 100%;
    padding: 50px 0;
    .container{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    @media (max-width:920px){
        .container{
            flex-direction: column;
            align-items: center;
        }
    }
`