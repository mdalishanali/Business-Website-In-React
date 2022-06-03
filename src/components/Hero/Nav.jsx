/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from "react"
import {Container} from "../GlobalComponents/Container";
import { NavLogo } from './NavLogo';
import { NavMenu } from './NavMenu';

export const Nav = ()=>{
    const [toggleMenu, setToggleMenu]=useState(false);
    return(
        <nav css={styles}>
            <Container>
            <NavLogo/>
            <NavMenu toggleMenu={toggleMenu} />
            <i onClick={()=>setToggleMenu(!toggleMenu)}
            id="burgerMenu"
            className={
                toggleMenu?"fa fa-times fa-2x": "fa fa-braille fa-2x"
            }></i>
            </Container>
          
        </nav>
    )
    }

    const styles = css`
    width:100%;
    position:absolute;
    top:0;
    padding:26px 0;
    .container{
        display :flex;
        justify-content:space-between;
        align-items: center;
           #burgerMenu{
               color: #fff;
               cursor: pointer;
               display: none;
           } 
        /* border:2px solid violet; */
         
    }
    @media (max-width:940px) {
            .container{
                #burgerMenu{
                    display: block;
                }
            }
    }
    `