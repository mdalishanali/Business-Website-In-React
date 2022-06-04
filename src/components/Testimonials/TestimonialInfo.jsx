import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TestimonialUserImg from "../../img/testimonialUser.webp";
export const TestimonialInfo = () => {
  return (
    <div  className="testimonialInfo">
        <div className="user">
            <img src={TestimonialUserImg} alt="user" />
            <div className="userDesc">
                <h2>John Doe</h2>
                <span>CEO,HotingComp</span>
            </div>
        </div>
        <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
      ultrice.
    </p>
    </div>
  )
}
