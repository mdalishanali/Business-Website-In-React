/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';import { Container } from '../GlobalComponents/Container';
import { HeroImg } from './HeroImg';
import { HeroInfo } from './HeroInfo';
import { Nav } from "./Nav"

export const Hero = ()=>{
    return(
        <section css={styles} className="hero" id='home'>
              <Nav/> 
               <Container>
                        <HeroInfo/>
                        <HeroImg/>
                   </Container> 
        </section>
        
    )
}
const styles = css`
width: 100%;
min-height: 100vh;
background: #020230;
display: flex;
position: relative;
.container{
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
@media (min-width: 941px)and (max-width:1245px){
    .container{
        max-width: 870px;
    }
}

`