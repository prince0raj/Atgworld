import React from 'react'
import { IoShareSocial } from 'react-icons/io5'
import { IoEyeOutline } from 'react-icons/io5'
import { BsThreeDots } from 'react-icons/bs'
import styled from 'styled-components';

const Card = (prop) => {
    return (
        <Box>
            <Banner src={prop.imgBanner} />
            <TextBox>
                <First>
                    <img src={prop.imgLogo} alt="" />
                    <span>
                        <h1>{prop.heading}</h1><BsThreeDots /> </span>
                    <p>I've worked in UX for the bettre part of a decad. From now on, I plan to rei...</p>
                </First>
                <Second>
                    <User>
                        <img src={prop.ulogo} alt="" />
                        <p>{prop.uname}</p>
                    </User>
                    <Review>
                        <p><IoEyeOutline /> 1.4k views</p>
                        <span><IoShareSocial /></span>
                    </Review>
                </Second>
            </TextBox>
        </Box>
    )
}

export default Card;
const Box = styled.div`
display: flex;
flex-direction: column;
width: 692px;
height: 472px;
background: #FFFFFF;
border: 1px solid #E0E0E0;
border-radius: 4px;
@media (max-width:931px){
    width:80vw
  }
  @media (max-width:671px){
    width: 360px;
    height: 361px;
  }
`
const TextBox = styled.div`
padding:20px;
`
const Second = styled.div`
display:flex;
justify-content:space-between;
padding-top:32px;
@media (max-width:671px){
    padding:20px 0;
}
`
const Review = styled.div`
display: flex;
 gap: 40px;
p{
    color: #525252;
    display:flex;
    align-items:center;
    gap:0.3rem;
    font-weight: 500;
    font-size: 14px;
}
span{
    background: #EDEEF0;
    border-radius: 2px;
    padding: 10.5px 14.5px;
    display: flex;
    align-items: center;
}
@media (max-width:671px){
    p{
    font-weight: 500;
    font-size: 11px
    }
    span{
        padding: 9.5px 12.5px;
    }
    }
`
const User = styled.div`
display:flex;
align-items:center;
gap:10px;
img{
width: 48px;
height: 48px;
}
p{font-weight: 600;
font-size: 18px;
}
@media (max-width:671px){
    p{
        font-size:13px;
    }
}
`
const First = styled.div`
span{
    display:flex;
    justify-content:space-between;
    font-size: 22px;
    padding:10px 0;
}
h1{
width: 600px;
font-weight: 600;
font-size: 22px;
}
p{
font-weight: 400;
font-size: 19px;
color: #5C5C5C;
}
@media (max-width:671px){
    h1{
        width: 286px;
        font-weight: 600;
    font-size: 16px;
    }
    p{
        font-weight: 400;
font-size: 14px;
    }
}
`
const Banner = styled.img`
`

