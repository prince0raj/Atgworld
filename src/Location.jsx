import React from 'react'
import {MdOutlineLocationOn} from 'react-icons/md'
import {MdModeEdit} from 'react-icons/md'
import {BiErrorCircle} from 'react-icons/bi'
import styled from 'styled-components'
const Location = () => {
    return (
        <Wrap>
            <Loc>
                <h2>
                    <MdOutlineLocationOn />
                    Nodia, India
                </h2>
                <MdModeEdit/>
            </Loc>
            <Des>
                <BiErrorCircle/>
                <p>
                   Your location will help us serve better and extended a personalised experience.
                </p>
            </Des>
        </Wrap>
    )
}

export default Location;
const Wrap=styled.div`
width: 243px;
@media (max-width:1121px){
    display:none;
  }
`
const Loc=styled.div`
     display:flex;
     justify-content:space-between;
     border-bottom: 0.4px solid #B8B8B8;
     cursor:pointer;
    h2{
        display:flex;
        align-items:center;
        font-weight: 400;
        font-size: 14px;
        color: #000000;
        gap:0.2rem;
      }
      padding:10px 0;
`
const Des=styled.div`
display:flex;
gap:8.36px;
color:black;
align-items:flex-start;
opacity:0.5;
p{
font-weight: 400;
font-size: 12px;
}
svg{
    font-size: 29px;
    position: relative;
    transform: translateY(-5px);
}
padding:16px 0;
`

