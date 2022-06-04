import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TestimonialShapeBg from "../../img/testimonialShape.webp";
import { Container } from '../GlobalComponents/Container';
import { TestimonialInfo } from './TestimonialInfo';
import { TesimonialsImg } from './TesimonialsImg';

export const Testimonials = () => {
  return (
    <section css={styles} className="testimonials">
    <img src={TestimonialShapeBg} alt="shape" /> 
    <Container>
        <TestimonialInfo/>
         <TesimonialsImg/>
    </Container>
    </section>
    )
}

const styles = css`
    width: 100%;
    padding: 120px 0 160px 0;
    position: relative;
    > img{
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .container{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    @media (max-width:790px){
        .container{
            flex-direction: column;
            align-items: center;
        }
    }
    @media (max-width:1010px){
        >img{
            display: none;  
        }
    }
`