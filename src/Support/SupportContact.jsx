import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
export const SupportContact = ({supportIcon,supportText}) => {
  return (
        <div css={styles} className="supportContact" >
                <div className="iconWrap">
                    <i className={supportIcon} ></i>
                </div>
                <p>{supportText}</p>
        </div>
    )
}
const styles = css`
    width: 100%;
    max-width: 160px;
    border-radius: 12px;
    background: #eb566c;
    padding:20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 26px;
    .iconWrap{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background: #ff6b81;;
        display: flex;
        i{
         margin:auto;
         color: #fff;
        }
    }
    p{
        margin: 20px 0 0 0;
        color: #fff;
        font-size: 14px;
        font-weight: 600;

    }

    @media (max-width:825px){
        max-width: 500px;
        margin: 16px 0;
        padding: 50px 20px;
    }
    @media (min-width:826px) and (max-width:1190px){
        max-width: 100%;
        &:first-of-type{
            margin-bottom: 16px;
        }
    }
`
