import React from 'react'
import Card from './Card'
import Card3 from './Card3'
import Textbox from './Textbox'
import styled from 'styled-components'
import {MdModeEdit} from 'react-icons/md'

const Articles = () => {
  return (
    <>
    <FinalCard>
    <Card heading="Tax Bebefits for Investment under National Pension Scheme launched by Goverment" uname="Sarthak Kamra" imgLogo='./images/Article.png' imgBanner='./images/article 1.png' ulogo='./images/article 1 l.png'/>
    <Card heading="What if the famous btand had regular fonts? Meet RegulaBrands!" uname="Sarthak Kamra" imgLogo='./images/Education.png' imgBanner='./images/article 2.png' ulogo='./images/article 2 l.png'/>
    <Card3 heading="Software Developer" uname="Sarthak Kamra" imgLogo='./images/Meetup.png' imgBanner='./images/article 3.png' ulogo='./images/article 3 l.png'/>
    <Textbox heading="Software Developer" uname="SJoseph Gray" imgLogo='./images/Job.png' ulogo='./images/article 4 l.png'/>
    </FinalCard>
    <Pointer>
        <MdModeEdit/>
    </Pointer>
    </>
  )
}

export default Articles;
const Pointer=styled.div`
width: 54px;
height: 54px;
background: linear-gradient(180deg, #FF5C5C 0%, #F0568A 100%);
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18), 0px 0px 2px rgba(0, 0, 0, 0.08);
border-radius:50%;
display:none;
align-items:center;
justify-content:center;
position:fixed;
bottom:1.3rem;
right:1rem;
svg{
  font-size:19px;
  path{
    color:white;
  }
}
@media (max-width:671px){
  display:flex;
}
`
const FinalCard=styled.div`
display:flex;
flex-direction: column;
gap:16px;
@media (max-width:1121px){
align-items:center;
justify-content:center;
}
`
