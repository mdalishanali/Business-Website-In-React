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
    
`