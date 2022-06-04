/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react'

export const DomainPrice = ({domain,price,color}) => (
        <div css={styles}  className="domainPrice">
            <p style = {{color:color}}>{domain}</p>
            <span>{price}</span>
        </div>
)

const styles = css`
  padding: 18px 26px;
  width: 100%;
  max-width: 200px;
  color: #fff;
  border-right: 1px solid #032a57;
  &:last-of-type {
    border-right: 0;
  }
  p {
    margin-bottom: 12px;
  }
  span {
    color: #636376;
    font-size: 15px;
  }
  @media (max-width: 711px) {
    max-width: 50%;
    border-right: none;
    &:nth-child(odd) {
      border-right: 1px solid #032a57;
    }
  }
  @media (min-width: 711px) and (max-width: 1200px) {
    max-width: 33%;
    border-right: none;
  }
`;