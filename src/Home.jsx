import React from 'react'
import styled from 'styled-components'
const Home = () => {
    return (
        <Container>
        <Wrap>
        </Wrap>
          <Text>
            <h1>Computer Engineering</h1>
            <p>142,765 Computer Engineers follow this</p>
          </Text>
        </Container>
    )
}

export default Home;
const Container=styled.div`
  background:black;
`
const Wrap=styled.div`
    background: url(./images/banner.png);
    width: 100%;
    height: 30.5vw;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity:0.5;
    @media (max-width:560px){
        background: url(./images/banner2.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        width:100%;
        height:60vw;
      }
`
const Text=styled.div`
position: absolute;
    transform: translate(12vw,21vw);
    left: 0vw;
    bottom: 27vw;
    top: 5vw;
    width: 422px;
    color: white;
    opacity: 1;
h1{
font-weight: 700;
font-size: 36px;
color: #FFFFFF;
}
p{
font-weight: 400;
font-size: 18px;
line-height: 23px;
color:#FFFFFF;
}
@media (max-width:861px){
    transform: translate(9vw,21vw);
    h1{
        font-size:26px;
    }
    p{
        font-size:14px
    }
}
@media (max-width:560px){
    width: 250px;
    transform: translate(10vw,41vw);
   h1{
    font-size: 17px;
}
p{
    font-size: 12px;
   }
}
`