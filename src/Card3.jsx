import React from 'react'
import { IoShareSocial } from 'react-icons/io5'
import { IoEyeOutline } from 'react-icons/io5'
import { BsThreeDots } from 'react-icons/bs'
import {MdOutlineLocationOn} from 'react-icons/md'
import {BiShoppingBag} from 'react-icons/bi';
import styled from 'styled-components';

const Card3 = (prop) => {
    return (
        <Box>
            <Banner src={prop.imgBanner} />
            <TextBox>
                <First>
                    <img src={prop.imgLogo} alt="" />
                    <span>
                        <h1>{prop.heading}</h1><BsThreeDots /> </span>
                        <Details>
                            <h2>
                               <BiShoppingBag/>
                               Innovaccer Analytics Private Ltd.
                            </h2>
                            <h2>
                               <MdOutlineLocationOn/>
                               Nodia, India
                            </h2>
                        </Details>
                        <button>
                            visit website
                        </button>
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

export default Card3;
const Details=styled.div`
  display:flex;
  justify-content: space-between;
  width:399px;
  h2{
    display:flex;
    align-items:center;
    font-weight: 500;
    font-size: 15px;
    color: #000000;
    gap:0.2rem;
  }
  @media (max-width:671px){
    flex-direction:column;
    justify-content: space-around;
    gap:0.4rem;
    width: 286px;

}
`
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
    height: 384px;
}
`
const TextBox = styled.div`
padding:20px;
`
const Second = styled.div`
display:flex;
justify-content:space-between;
padding-top:25px;
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
button{
    width:100%;
    background: #FFFFFF;
    border: 0.7px solid #A9AEB8;
    border-radius: 8px;
    font-size:14px;
    color: #E56135;
    font-weight:600;
    padding:10px 0;
    margin-top:16px;
    cursor:pointer;
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

